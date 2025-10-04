import { getCollection } from "astro:content";
import { toString } from "mdast-util-to-string";
import getReadingTime from "reading-time";

// 获取所有文章的字数统计数据
export async function getWordCountStats() {
  const allBlogPosts = await getCollection("posts", ({ data }) => {
    return data.draft !== true;
  });

  // 计算每篇文章的字数
  const postsWithWordCount = await Promise.all(
    allBlogPosts.map(async (post) => {
      const { remarkPluginFrontmatter } = await post.render();
      return {
        slug: post.slug,
        title: post.data.title,
        published: post.data.published,
        words: remarkPluginFrontmatter.words,
        minutes: remarkPluginFrontmatter.minutes,
      };
    })
  );

  // 按日期分组统计总字数（统计所有日期，包括未来日期的文章）
  const dailyStats: Record<string, number> = {};
  
  postsWithWordCount.forEach((post) => {
    const date = new Date(post.published);
    const dateKey = date.toISOString().split('T')[0]; // YYYY-MM-DD格式
    
    if (!dailyStats[dateKey]) {
      dailyStats[dateKey] = 0;
    }
    dailyStats[dateKey] += post.words;
  });

  return {
    totalPosts: postsWithWordCount.length,
    totalWords: postsWithWordCount.reduce((sum, post) => sum + post.words, 0),
    dailyStats,
    posts: postsWithWordCount.sort((a, b) => 
      new Date(b.published).getTime() - new Date(a.published).getTime()
    ),
  };
}

// 生成GitHub风格的贡献热力图数据
export function generateContributionData(dailyStats: Record<string, number>) {
  const currentYear = new Date().getFullYear();
  const firstDayOfYear = new Date(currentYear, 0, 1);
  const lastDayOfYear = new Date(currentYear, 11, 31);
  
  const contributionData: Array<{
    date: string;
    count: number;
    level: number;
  }> = [];

  // 生成当前年份的日期数据（包括未来日期）
  for (let d = new Date(firstDayOfYear); d <= lastDayOfYear; d.setDate(d.getDate() + 1)) {
    const dateKey = d.toISOString().split('T')[0];
    const wordCount = dailyStats[dateKey] || 0;
    
    // 根据字数确定贡献等级 (0-4)
    let level = 0;
    if (wordCount > 0) {
      if (wordCount <= 100) level = 1;
      else if (wordCount <= 500) level = 2;
      else if (wordCount <= 1000) level = 3;
      else level = 4;
    }

    contributionData.push({
      date: dateKey,
      count: wordCount,
      level,
    });
  }

  return contributionData;
}

// 获取热力图的统计摘要
export function getContributionSummary(contributionData: Array<{ count: number }>) {
  const totalContributions = contributionData.reduce((sum, day) => sum + day.count, 0);
  const activeDays = contributionData.filter(day => day.count > 0).length;
  const maxDailyContribution = Math.max(...contributionData.map(day => day.count));
  const currentStreak = calculateCurrentStreak(contributionData);
  const longestStreak = calculateLongestStreak(contributionData);

  return {
    totalContributions,
    activeDays,
    maxDailyContribution,
    currentStreak,
    longestStreak,
  };
}

// 计算当前连续更新天数
function calculateCurrentStreak(contributionData: Array<{ date: string; count: number }>) {
  const today = new Date().toISOString().split('T')[0];
  let streak = 0;
  
  // 从今天开始向前检查
  for (let i = contributionData.length - 1; i >= 0; i--) {
    if (contributionData[i].count > 0) {
      streak++;
    } else {
      break;
    }
  }
  
  return streak;
}

// 计算最长连续更新天数
function calculateLongestStreak(contributionData: Array<{ date: string; count: number }>) {
  let longestStreak = 0;
  let currentStreak = 0;
  
  for (const day of contributionData) {
    if (day.count > 0) {
      currentStreak++;
      longestStreak = Math.max(longestStreak, currentStreak);
    } else {
      currentStreak = 0;
    }
  }
  
  return longestStreak;
}
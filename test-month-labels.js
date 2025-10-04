// 测试getMonthLabels函数
const currentYear = new Date().getFullYear();
const firstDayOfYear = new Date(currentYear, 0, 1);
const lastDayOfYear = new Date(currentYear, 11, 31);

// 复制getMonthLabels函数
const getMonthLabels = () => {
  const labels = [];
  const currentDate = new Date(firstDayOfYear);
  
  // 生成12个月的标签
  for (let i = 0; i < 12; i++) {
    const monthName = currentDate.toLocaleDateString('zh-CN', { month: 'short' });
    
    // 计算该月份第一天在热力图中的位置（周数）
    const daysFromStart = Math.floor((currentDate.getTime() - firstDayOfYear.getTime()) / (24 * 60 * 60 * 1000));
    const weekCol = Math.floor((daysFromStart + firstDayOfYear.getDay()) / 7) + 1;
    
    labels.push({
      name: monthName,
      position: weekCol
    });
    
    // 移动到下个月的第一天
    currentDate.setMonth(currentDate.getMonth() + 1, 1);
  }
  
  return labels;
};

// 测试函数
console.log('Testing getMonthLabels function...');
const result = getMonthLabels();
console.log('Result type:', typeof result);
console.log('Is array?', Array.isArray(result));
console.log('Result length:', result.length);
console.log('Result:', result);

// 测试map方法
console.log('\nTesting map method...');
try {
  const mapped = result.map(({name, position}) => ({name, position}));
  console.log('Map successful:', mapped);
} catch (error) {
  console.log('Map failed:', error.message);
}
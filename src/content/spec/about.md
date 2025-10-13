# 关于我的博客
## 写博客的原因
不知道什么时候起，我们更倾向于记录短平快的内容，而没有耐心去认真记录自己的生活。我身边的人也更倾向于在QQ空间或者朋友圈进行短平快的记录。我的空间中常常是几句简单的话配上几张图片，仿佛这几张图片就能写出当时自己的情感。但我们真正去记录，去详细描述时却又显得非常苍白，总是用“很开心”或者“比较难过”等等苍白的词语。

当然，我的空间也充满了我自己的碎片化内容。但是回头看来，这种没标签没仓库的情绪化总结内容完全让我记不起来我这一年的变化。而大二之后，由于课程越来越多，我已经很少去写一些东西或者看书了。获取信息的方式更多是网络社交媒体。而我也能明显感觉到自己写作能力的下降，有些时候只追求表达的含义而没有更多去思考。

所以，我决定开始尝试写博客，不仅仅是作为自己简历的补充，更是对于自己思考以及学习的记录。当然，这些记录可能很杂，专业性也不够强，但是我还是希望可以在网上开辟出一片属于我的小天地。
## 博客的搭建
网站的搭建有多种方法，例如wordpress、hexo或者hugo等等。该网站在搭建过程中尝试了jekyll、mizuki以及quartz4等多种模板，并最终选择了该Mizuki模板。下面是我所采用的这几种博客的特点以及使用建议。
### 基于Minimal Mistakes的jekyll的网站模板
基于[Minimal Mistakes](https://mademistakes.com/)的[Jekyll](https://jekyllrb.com/)的网站模板可以参考该github仓库。
::github{repo="mmistakes/minimal-mistakes"}
本人当时使用的是[蔡汉霖](https://caihanlin.com/)学长的魔改版，贴出github仓库如下。
::github{repo="GuangLun2000/GuangLun2000.github.io"}
优点：
- 页面清晰明了，易于阅读与迅速了解资料

缺点：
- 页面功能较少，仅适合于简单展示
### 基于Astro的Mizuki模板
博主最开始是想使用基于[astro](https://docs.astro.build/en/getting-started/)的[fuwari](https://github.com/saicaca/fuwari/)主题，在网上查询后找到了功能更加全面丰富的[Mizuki](https://docs.mizuki.mysqil.com/)主题。两个主题使用人数都较多，功能也较为全面。这两个主题可以参考以下仓库。
::github{repo="saicaca/fuwari"}
::github{repo="matsuzaka-yuki/Mizuki"}
优点：
- 模板页面丰富，支持多语言、播放器、live2d等功能
- 多语言文档，对国内友好
- 有日记、相册、友链等拓展功能

缺点：
- 组件较多，个性化定制需要仔细更改配置

推荐：喜欢丰富页面发布笔记的，希望自己笔记可以得到多种形式的发布
### 基于obsidian的quartz模板
基于obsidian的[ Quartz 4](https://quartz.jzhao.xyz/)模板可以参考该github仓库。
::github{repo="jackyzha0/quartz"}

优点：
- 可以与obsidian无缝衔接，支持双链与链接小窗预览
- 可以配合obsidian的同步进行实时撰写
- 可以与obsidian git进行联动实时上传笔记

缺点：
- 给的模板较为简单，功能较少且页面呈现方式较少，更像是笔记库
- 暂时没有多语言功能
- 英文帮助文档，虽然可以使用翻译器进行阅读，但是能有偏差

推荐：喜欢极简主义的，对自己博客各种页面、组成要求不高。除笔记外没有过多功能。

### 基于Stack的Hugo模板
基于Stack的Hugo模板可以参考该仓库，其使用文档的链接为[Stack](https://stack.jimmycai.com/)。
::github{repo="CaiJimmy/hugo-theme-stack"}
优点：
- 构建快，支持中英双语构建博客
- 自由度比较高
缺点：
- 有些地方对中文支持不多，需要一定的英文基础
- 移动端样式感觉不够美观

## 网站动态
2025-09-19：该网站从原有jekyll模板改为基于Astro的Mizuki模板

2024-11-16：个人博客基于jekyll模板搭建完成

<span style="color:#ee88b1">*Built with ❤️ using Astro and Mizuki, inspired by modern web design principles.*</span>
---
title: Github Profile的配置
published: 2025-10-18
description: 如何配置一个好看的Github Profile页面
pinned: false
tags:
  - Blogging
category: CS
draft: true
---
## Github Profile是什么
一般情况下，GitHub 个人主页会显示其仓库信息、提交信息。但是如果你拜访别人的github，会发现有些主页能够让你眼前一亮。这种定制的主页能够更加详细地介绍你的贡献、提交信息以及个人信息，远比默认主页包含了更多信息。

我们先了解github中profile中设置方法，然后再进行美化。我们首先在 GitHub 上新建一个仓库，仓库名和自己 Github 用户名相同，然后添加一个 README.md 自述文件，在该文件里添加信息即可。

## 侧边栏的定制
当然，在我们定制自己的github主页前，别忘了GitHub在侧边栏也可以添加自己的基本信息，包括名字、签名、公司、邮箱以及链接等。侧边栏也是个人信息中很重要的一部分。

## 所使用的组件
### 打字机
你可以以打字机的形式展示你的GitHub信息
```markdown
[![Typing SVG](https://readme-typing-svg.demolab.com?font=Merriweather&pause=1000&center=true&vCenter=true&width=1000&lines=Welcome+to+Tianhao's+GitHub!)](https://git.io/typing-svg)
```
### 徽章
你可以以徽章的形式简要地展示你的技术栈或者联系方式。
```markdown
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/QTH1225)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:1340356343@qq.com)
[![Website](https://img.shields.io/badge/Blog-0088CC?style=for-the-badge&logo=google-chrome&logoColor=white)](https://qintianhao.com)

These are the skills that I know and have mastered:

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![MATLAB](https://img.shields.io/badge/MATLAB-%23ED8B00.svg?style=for-the-badge&logo=mathworks&logoColor=white)
![LaTeX](https://img.shields.io/badge/LaTeX-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
![AutoCAD](https://img.shields.io/badge/AutoCAD-%23FF6B35.svg?style=for-the-badge&logo=autocad&logoColor=white)
![Ansys](https://img.shields.io/badge/Ansys-%23FF6B00.svg?style=for-the-badge&logo=ansys&logoColor=white)
![COMSOL](https://img.shields.io/badge/COMSOL-%23003E96.svg?style=for-the-badge&logo=comsol&logoColor=white)
```

### 博客链接
你可以在你的GitHub profile中链接到你博客的最新文章
```markdown
### Blog posts
Here is my blog. You can find some of my study and thinking records here.
<!-- BLOG-POST-LIST:START -->
- [试验|水工碾压混凝土含气量测定](https://qintianhao.com/posts/experiment-rcc-aircontent/)
- [阅读| 提问的艺术](https://qintianhao.com/posts/reading-the-art-of-question/)
- [Markdown Mermaid](https://qintianhao.com/posts/markdown-mermaid/)
- [PC软件推荐](https://qintianhao.com/posts/recommand-of-pc-softwares/)
- [About Me](https://qintianhao.com/posts/about-me/)
<!-- BLOG-POST-LIST:END -->
```
### 贪吃蛇数据贡献图
你可以在你的GitHub profile中以贪吃蛇的形式展示你的贡献图
```markdown
<picture>  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/QTH1225/QTH1225/output/github-contribution-grid-snake-dark.svg">  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/QTH1225/QTH1225/output/github-contribution-grid-snake.svg">  <img alt="github contribution grid snake animation" src="https://raw.githubusercontent.com/QTH1225/QTH1225/output/github-contribution-grid-snake.svg"> </picture>
```
### GitHub数据统计
在GitHub profile中也可以统计你GitHub的提交数据或者仓库数据。
```markdown
The number of views of this page is as follows.

<img src="https://count.getloli.com/@QTH1225?theme=moebooru"/>

<a href="https://github.com/anuraghazra/github-readme-stats">
  <img height=200 align="center" src="https://github-readme-stats.vercel.app/api?username=QTH1225&show_icons=true&theme=transparent" />
</a>
<a href="https://github.com/anuraghazra/convoychat">
  <img height=200 align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=QTH1225&layout=donut&langs_count=5&card_width=320&theme=transparent" />
</a>
```
### GitHub提交月份统计图
你可以在你的GitHub profile中以折线图的形式展示你的贡献月度变化。
```markdown
[![Ashutosh's github activity graph](https://github-readme-activity-graph.vercel.app/graph?username=QTH1225&theme=github-compact)](https://github.com/ashutosh00710/github-readme-activity-graph)

```
## 放在最后
再次感谢所有这些开源组件的创作者以及相关配置教程的撰写者，这些都在博主配置过程中给予了莫大的帮助。本文主要参考的是：
[超详细的 GitHub 个人主页美化教程 - peterjxl - 博客园](https://www.cnblogs.com/PeterJXL/p/18437094)

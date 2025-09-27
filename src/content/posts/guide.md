---
title: Simple Guides for Mizuki
published: 2025-09-10
description: How to use this blog template.
tags:
  - Mizuki
  - Blogging
  - Customization
category: Guides
draft: false
---



This blog template is built with [Astro](https://astro.build/). For the things that are not mentioned in this guide, you may find the answers in the [Astro Docs](https://docs.astro.build/).

## Front-matter of Posts

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
---
```

![]()



| Attribute     | Description                                                                                                                                                                                                 |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`       | The title of the post.                                                                                                                                                                                      |
| `published`   | The date the post was published.                                                                                                                                                                            |
| `pinned`      | Whether this post is pinned to the top of the post list.                                                                                                                                                   |
| `description` | A short description of the post. Displayed on index page.                                                                                                                                                   |
| `image`       | The cover image path of the post.<br/>1. Start with `http://` or `https://`: Use web image<br/>2. Start with `/`: For image in `public` dir<br/>3. With none of the prefixes: Relative to the markdown file |
| `tags`        | The tags of the post.                                                                                                                                                                                       |
| `category`    | The category of the post.                                                                                                                                                                                   |
| `licenseName` | The license name for the post content.                                                                                                                                                                      |
| `author`      | The author of the post.                                                                                                                                                                                     |
| `sourceLink`  | The source link or reference for the post content.                                                                                                                                                          |
| `draft`       | If this post is still a draft, which won't be displayed.                                                                                                                                                    |

## 表格示例

### 基本表格
这是一个简单的表格示例，展示Markdown表格的基本语法：

| 功能 | 语法 | 示例 |
|------|------|------|
| 标题 | `# 标题` | # 一级标题 |
| 粗体 | `**粗体**` | **粗体文字** |
| 斜体 | `*斜体*` | *斜体文字* |
| 链接 | `[文本](链接)` | [Astro官网](https://astro.build/) |
| 代码 | \`代码\` | `console.log()` |

### 对齐表格
您可以使用冒号来指定列的对齐方式：

| 左对齐 | 居中对齐 | 右对齐 |
| :-- | :--: | --: |
| 文本左 | 文本中  | 文本右 |
| 内容左 | 内容中  | 内容右 |
| 数据左 | 数据中  | 数据右 |

### 复杂表格示例
下面是一个更复杂的表格，展示博客配置选项：

| 配置项 | 类型 | 默认值 | 描述 | 必需 |
|--------|------|--------|------|------|
| `site` | string | - | 网站URL | ✅ |
| `base` | string | `/` | 基础路径 | ❌ |
| `title` | string | - | 页面标题 | ✅ |
| `description` | string | - | 页面描述 | ❌ |
| `image` | string | - | 封面图片 | ❌ |

### 表格使用技巧
1. **使用管道符** `|` 分隔列
2. **使用连字符** `---` 分隔表头和内容
3. **对齐方式**：
   - `:---` 左对齐
   - `:--:` 居中对齐
   - `---:` 右对齐
4. **内容换行**：使用HTML的`<br/>`标签

## Where to Place the Post Files



Your post files should be placed in `src/content/posts/` directory. You can also create sub-directories to better organize your posts and assets.

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```

## 高级表格示例

### 项目进度跟踪表
| 任务 | 负责人 | 状态 | 开始日期 | 截止日期 | 进度 | 备注 |
|------|--------|------|----------|----------|------|------|
| 博客主题定制 | Alice | ✅ 完成 | 2025-09-01 | 2025-09-10 | 100% | 响应式设计完成 |
| 内容管理系统 | Bob | 🔄 进行中 | 2025-09-05 | 2025-09-20 | 75% | API集成中 |
| SEO优化 | Carol | ⏳ 待开始 | 2025-09-15 | 2025-09-25 | 0% | 等待内容就绪 |
| 性能测试 | David | ✅ 完成 | 2025-08-28 | 2025-09-05 | 100% | 加载速度优化完成 |

### 技术栈对比表
| 技术 | 类型 | 学习曲线 | 性能 | 社区支持 | 适用场景 | 推荐指数 |
|------|------|----------|------|----------|----------|----------|
| **Astro** | 静态站点生成器 | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | 内容型网站 | ⭐⭐⭐⭐ |
| **Next.js** | React框架 | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 复杂Web应用 | ⭐⭐⭐⭐ |
| **VuePress** | 文档生成器 | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | 技术文档 | ⭐⭐⭐ |
| **Hugo** | 静态站点生成器 | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | 博客/新闻站 | ⭐⭐⭐ |

### 博客功能特性表
| 功能模块 | 子功能 | 实现状态 | 优先级 | 技术实现 | 依赖项 |
|----------|--------|----------|--------|----------|--------|
| **文章系统** | Markdown支持 | ✅ | P0 | remark/rehype | - |
| | 代码高亮 | ✅ | P0 | expressive-code | - |
| | 数学公式 | ✅ | P1 | KaTeX | remark-math |
| **评论系统** | Twikoo集成 | ✅ | P1 | Twikoo | 外部服务 |
| | 邮件通知 | 🔄 | P2 | Node.js | SMTP配置 |
| **搜索功能** | 全文搜索 | ✅ | P1 | Pagefind | 构建时生成 |
| | 实时搜索 | ⏳ | P3 | Algolia | 付费服务 |

### 文件类型支持表
| 文件类型 | 扩展名 | 支持程度 | 处理方式 | 备注 |
|----------|--------|----------|----------|------|
| Markdown | `.md` | ✅ 完全支持 | Astro内置 | 主要内容格式 |
| MDX | `.mdx` | ✅ 完全支持 | @astrojs/mdx | 支持React组件 |
| 图片 | `.jpg/.png` | ✅ 完全支持 | 静态资源 | 自动优化 |
| PDF | `.pdf` | ⚠️ 有限支持 | 链接引用 | 直接下载 |
| 视频 | `.mp4` | ⚠️ 有限支持 | 外部托管 | 建议使用YouTube |

### 部署选项对比
| 平台 | 免费额度 | 构建速度 | 自定义域名 | CDN | 价格 | 推荐度 |
|------|----------|----------|------------|-----|------|--------|
| **Vercel** | 100GB/月 | ⭐⭐⭐⭐ | ✅ | ✅ | $20/月起 | ⭐⭐⭐⭐ |
| **Netlify** | 100GB/月 | ⭐⭐⭐ | ✅ | ✅ | $19/月起 | ⭐⭐⭐ |
| **GitHub Pages** | 无限 | ⭐⭐ | ✅ | ❌ | 免费 | ⭐⭐⭐ |
| **Cloudflare Pages** | 无限 | ⭐⭐⭐⭐ | ✅ | ✅ | 免费 | ⭐⭐⭐⭐ |

### 快捷键参考表
| 操作 | Windows/Linux | macOS | 功能描述 | 使用频率 |
|------|---------------|-------|----------|----------|
| 新建文章 | `Ctrl+N` | `Cmd+N` | 创建新文章 | ⭐⭐⭐⭐ |
| 保存文件 | `Ctrl+S` | `Cmd+S` | 保存当前文件 | ⭐⭐⭐⭐⭐ |
| 搜索内容 | `Ctrl+F` | `Cmd+F` | 在当前页面搜索 | ⭐⭐⭐⭐ |
| 全局搜索 | `Ctrl+Shift+F` | `Cmd+Shift+F` | 全局文件搜索 | ⭐⭐⭐ |
| 格式化代码 | `Shift+Alt+F` | `Shift+Option+F` | 代码格式化 | ⭐⭐⭐ |

### 表情符号在表格中的使用
| 表情 | 含义 | 使用场景 | 示例 |
|------|------|----------|------|
| ✅ | 完成/成功 | 任务状态、功能实现 | 功能开发 ✅ |
| 🔄 | 进行中 | 当前正在进行的任务 | 代码重构 🔄 |
| ⏳ | 待开始 | 计划中的任务 | 新功能 ⏳ |
| ⚠️ | 警告/注意 | 需要注意的事项 | 兼容性 ⚠️ |
| ❌ | 错误/不支持 | 不支持的功能 | 旧浏览器 ❌ |
| ⭐ | 评级/重要 | 优先级、评分 | 重要功能 ⭐⭐⭐⭐ |

### 表格最佳实践
1. **保持简洁**：每行不超过7列，避免过于宽泛
2. **使用标题**：为表格添加清晰的标题和描述
3. **对齐一致**：数字右对齐，文本左对齐
4. **适当空白**：使用空行分隔不同的表格
5. **移动端友好**：考虑在小屏幕上的显示效果
6. **语义化**：使用有意义的列名和内容

这些高级表格示例展示了Markdown表格在各种实际场景中的应用，从项目管理到技术对比，帮助您更好地组织和展示信息。

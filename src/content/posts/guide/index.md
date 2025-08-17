---
title: Fuwari 的简单指南
published: 2024-04-01
description: "如何使用这个博客"
image: "./cover.jpeg"
tags: ["Fuwari", "博客", "指南"]
category: "指南"
draft: false
---

> 封面图片来源: [Source](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/208fc754-890d-4adb-9753-2c963332675d/width=2048/01651-1456859105-(colour_1.5),girl,_Blue,yellow,green,cyan,purple,red,pink,_best,8k,UHD,masterpiece,male%20focus,%201boy,gloves,%20ponytail,%20long%20hair,.jpeg)

这个博客模板是用 [Astro](https://astro.build/). 构建的。对于本指南中没有提到的事情，您可以在 [Astro Docs](https://docs.astro.build/).

## 帖子的头信息

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

| Attribute     | Description                                                                                                                                                                                                 |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`       | The title of the post.                                                                                                                                                                                      |
| `published`   | The date the post was published.                                                                                                                                                                            |
| `description` | A short description of the post. Displayed on index page.                                                                                                                                                   |
| `image`       | The cover image path of the post.<br/>1. Start with `http://` or `https://`: Use web image<br/>2. Start with `/`: For image in `public` dir<br/>3. With none of the prefixes: Relative to the markdown file |
| `tags`        | The tags of the post.                                                                                                                                                                                       |
| `category`    | The category of the post.                                                                                                                                                                                   |
| `draft`        | If this post is still a draft, which won't be displayed.                                                                                                                                                    |

## 在哪里放置 Post 文件



你的文章文件应该放在 `src/content/posts/` 目录下。您还可以创建子目录，以更好地组织您的帖子和资产

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```

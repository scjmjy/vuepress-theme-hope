---
title: 博客页面路径
icon: link
category:
  - blog
tag:
  - blog
  - path
---

你可以通过 `themeConfig.plugins.blog` 控制博客中各页面路径。

博客提供的默认路径如下，如果它们与你的已有路径发生冲突，并且你不想调整自己的路径，你可以对它们进行修改。

| 配置项         | 描述         | 默认路径           |
| -------------- | ------------ | ------------------ |
| `article`      | 文章列表     | `/article/`        |
| `category`     | 分类地图页   | `/category/`       |
| `categoryItem` | 特定分类列表 | `/category/:name/` |
| `tag`          | 标签地图页   | `/tag/`            |
| `tagItem`      | 特定标签列表 | `/tag/:name/`      |
| `encrypted`    | 加密文章列表 | `/encrypted/`      |
| `slides`       | 幻灯片列表   | `/encrypted/`      |
| `star`         | 星标文章列表 | `/encrypted/`      |
| `timeline`     | 时间线列表   | `/timeline/`       |

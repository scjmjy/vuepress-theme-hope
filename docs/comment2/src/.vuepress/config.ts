import { defineHopeConfig } from "vuepress-theme-hope";
import { version } from "../../../../lerna.json";

export default defineHopeConfig({
  base: "/v2/comment/",

  dest: "./dist",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_kxwb6og9m5.css",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "Comment Plugin",
      description: "Comment Plugin for VuePress",
    },

    "/zh/": {
      lang: "zh-CN",
      title: "评论插件",
      description: "VuePress 的评论插件",
    },
  },

  theme: "hope",

  themeConfig: {
    hostname: "https://vuepress-theme-hope.github.io",

    author: {
      name: "Mr.Hope",
      url: "https://mrhope.site",
    },

    iconPrefix: "iconfont icon-",

    repo: "https://github.com/vuepress-theme-hope/vuepress-theme-hope",

    docsDir: "docs/comment2/src",

    logo: "/logo.svg",

    footer: "MIT Licensed | Copyright © 2019-present Mr.Hope",
    displayFooter: true,

    pageInfo: ["PageView", "Category", "Tag", "ReadingTime"],

    locales: {
      "/": {
        navbar: [
          "/README.md",
          {
            text: "Guide",
            icon: "creative",
            children: ["/guide/README.md", "/guide/waline.md"],
          },
          {
            text: "Config",
            icon: "config",
            children: ["/config/README.md", "/config/waline.md"],
          },
          "/migration.md",
          {
            text: version,
            icon: "note",
            children: [
              {
                text: "V1 Docs",
                link: "https://vuepress-theme-hope.github.io/v1/comment/",
              },
            ],
          },
        ],

        sidebar: {
          "/": [
            {
              text: "Guide",
              icon: "creative",
              children: ["guide/README.md", "guide/waline.md"],
            },
            {
              text: "Config",
              icon: "config",
              children: ["config/README.md", "config/waline.md"],
            },
            "migration.md",
          ],
        },
      },
      "/zh/": {
        navbar: [
          "/zh/README.md",
          {
            text: "指南",
            icon: "creative",
            children: ["/zh/guide/README.md", "/zh/guide/waline.md"],
          },
          {
            text: "配置",
            icon: "config",
            children: ["/zh/config/README.md", "/zh/config/waline.md"],
          },
          "/migration.md",
          {
            text: version,
            icon: "note",
            children: [
              {
                text: "V1 文档",
                link: "https://vuepress-theme-hope.github.io/v1/comment/zh/",
              },
            ],
          },
        ],

        sidebar: {
          "/zh/": [
            {
              text: "指南",
              icon: "creative",
              children: ["guide/README.md", "guide/waline.md"],
            },
            {
              text: "配置",
              icon: "config",
              children: ["config/README.md", "config/waline.md"],
            },
            "migration.md",
          ],
        },
      },
    },

    plugins: {
      comment: {
        type: "waline",
        serverURL: "https://vuepress-theme-hope-comment.vercel.app",
      },

      mdEnhance: {
        codegroup: true,
      },

      pwa: {
        favicon: "/comment/favicon.ico",
        themeColor: "#46bd87",
        cachePic: true,
        apple: {
          icon: "/v2/comment/assets/icon/apple-icon-152.png",
          statusBarColor: "black",
        },
        msTile: {
          image: "/v2/comment/assets/icon/ms-icon-144.png",
          color: "#ffffff",
        },
        manifest: {
          name: "vuepress-plugin-comment2",
          short_name: "comment plugin",
          icons: [
            {
              src: "/v2/comment/assets/icon/chrome-mask-512.png",
              sizes: "512x512",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/v2/comment/assets/icon/chrome-mask-192.png",
              sizes: "192x192",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/v2/comment/assets/icon/chrome-512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/v2/comment/assets/icon/chrome-192.png",
              sizes: "192x192",
              type: "image/png",
            },
          ],
          shortcuts: [
            {
              name: "Guide",
              short_name: "Guide",
              url: "/comment/guide/",
              icons: [
                {
                  src: "/v2/comment/assets/icon/guide-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
                {
                  src: "/v2/comment/assets/icon/guide-monochrome.png",
                  sizes: "192x192",
                  purpose: "monochrome",
                  type: "image/png",
                },
              ],
            },
            {
              name: "Config",
              short_name: "Config",
              url: "/comment/config/",
              icons: [
                {
                  src: "/v2/comment/assets/icon/config-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
                {
                  src: "/v2/comment/assets/icon/config-monochrome.png",
                  sizes: "192x192",
                  purpose: "monochrome",
                  type: "image/png",
                },
              ],
            },
          ],
        },
      },
    },
  },
});

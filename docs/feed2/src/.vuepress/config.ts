import { defineHopeConfig } from "vuepress-theme-hope";
import { version } from "../../../../lerna.json";

export default defineHopeConfig({
  base: "/v2/feed/",

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
      title: "Feed Generator",
      description: "Feed Plugin for VuePress2",
    },

    "/zh/": {
      lang: "zh-CN",
      title: "Feed 生成器",
      description: "VuePress Feed 插件",
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

    docsDir: "docs/feed2/src",

    logo: "/logo.svg",

    footer: "MIT Licensed | Copyright © 2019-present Mr.Hope",
    displayFooter: true,

    pageInfo: ["PageView", "Category", "Tag", "ReadingTime"],

    locales: {
      "/": {
        navbar: [
          "/README.md",
          "/guide.md",
          "/config/README.md",
          "/migration.md",
          {
            text: version,
            icon: "note",
            children: [
              {
                text: "V1 Docs",
                link: "https://vuepress-theme-hope.github.io/v1/feed/",
              },
            ],
          },
        ],

        sidebar: {
          "/": [
            "README.md",
            "guide",
            {
              text: "Config",
              icon: "config",
              prefix: "config/",
              collapsable: false,
              children: ["README.md", "channel.md", "getter.md", "item.md"],
            },
            "migration.md",
          ],
        },
      },

      "/zh/": {
        navbar: [
          "/zh/README.md",
          "/zh/guide.md",
          "/zh/config/README.md",
          "/zh/migration.md",
          {
            text: version,
            icon: "note",
            children: [
              {
                text: "V1 文档",
                link: "https://vuepress-theme-hope.github.io/v1/feed/zh/",
              },
            ],
          },
        ],

        sidebar: {
          "/zh/": [
            "README.md",
            "guide.md",
            {
              text: "配置",
              icon: "config",
              prefix: "config/",
              collapsable: false,
              children: ["README.md", "channel.md", "getter.md", "item.md"],
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
        favicon: "/v2/feed/favicon.ico",
        themeColor: "#46bd87",
        cachePic: true,
        apple: {
          icon: "/v2/feed/assets/icon/apple-icon-152.png",
          statusBarColor: "black",
        },
        msTile: {
          image: "/v2/feed/assets/icon/ms-icon-144.png",
          color: "#ffffff",
        },
        manifest: {
          name: "vuepress-plugin-feed2",
          short_name: "feed plugin",
          icons: [
            {
              src: "/v2/feed/assets/icon/chrome-mask-512.png",
              sizes: "512x512",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/v2/feed/assets/icon/chrome-mask-192.png",
              sizes: "192x192",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/v2/feed/assets/icon/chrome-512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/v2/feed/assets/icon/chrome-192.png",
              sizes: "192x192",
              type: "image/png",
            },
          ],
          shortcuts: [
            {
              name: "Guide",
              short_name: "Guide",
              url: "/v2/feed/guide.html",
              icons: [
                {
                  src: "/v2/feed/assets/icon/guide-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
                {
                  src: "/v2/feed/assets/icon/guide-monochrome.png",
                  sizes: "192x192",
                  purpose: "monochrome",
                  type: "image/png",
                },
              ],
            },
            {
              name: "Config",
              short_name: "Config",
              url: "/v2/feed/config/",
              icons: [
                {
                  src: "/v2/feed/assets/icon/config-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
                {
                  src: "/v2/feed/assets/icon/config-monochrome.png",
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

  plugins: [
    [
      "@vuepress/docsearch",
      {
        appId: "VXIEHELDL1",
        apiKey: "595796f71b6ba14326719682c3738c0c",
        indexName: "vuepress-theme-hope-v2",
      },
    ],
  ],
});

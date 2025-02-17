---
title: Feed Support
icon: rss
category:
  - feature
tag:
  - feature
  - feed
---

The theme adds feed suport using [`vuepress-plugin-feed2`][feed2].

::: info

`vuepress-theme-hope` provides `feed` options in `themeConfig.plugins` as plugin options to `vuepress-plugin-feed2`.

:::

<!-- more -->

## Enable Feed Output

`@mr-hope/vuepress-plugin-feed` plugin can generate feed in the following three formats for you:

- Atom 1.0 (Default output: atom.xml)
- JSON 1.1 (Default output: feed.json)
- RSS 2.0 (Default output: rss.xml)

::: tip

Atom and JSON are provided to improve more feed software adaptation.

Please use RSS if possible.

:::

Please set `atom`, `json` or `rss` to `true` in the `themeConfig.plugins.feed` according to the format you want to generate.

Considering that rare people stick to feed now, the plugin provides a minimal configuration to adjust the automatic generation of detailed feed files. Also it allows you to freely define the output content of the feed.

## Channel Settings

You can customize information of feed channel by setting the `channel` option in `themeConfig.plugins.feed`.

We recommend you to set the following options:

- Convert the date when the feed was created to ISOString and write it to `channel.pubDate`
- Set the content update cycle (unit: minute) in `channel.ttl`

::: tip Default channel settings

- The title and description of the channel is the name and description of the site by default

- The link of the channel and the last update time will be automatically generated by the plugin.

:::

For detailed options and their values, please see [Feed Channel Config][feed2-channel]

## Generation control

### Default generation logic

By default, all articles are added to the feed stream.

For the content read by default, see [Configuration → Item Control][feed2-item]

### Custom feed item

You can control how feed item is generated in specific article by configuring the `feed` option in frontmatter.

For detailed options and their default values, see [Configuration → Project Settings][feed2-item].

### Custom Feed Generation

You can take full control of feed items generation by configuring the `getter` in the plugin options.

For detailed options and their default values, see [Configuration → Feed Getter][feed2-getter].

[feed2]: https://vuepress-theme-hope.github.io/v2/feed/
[feed2-channel]: https://vuepress-theme-hope.github.io/v2/feed/config/channel.html
[feed2-item]: https://vuepress-theme-hope.github.io/v2/feed/config/item.html
[feed2-getter]: https://vuepress-theme-hope.github.io/v2/feed/config/getter.html

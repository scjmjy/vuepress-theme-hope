import { usePageFrontmatter } from "@vuepress/client";
import { defineComponent, h, resolveComponent } from "vue";

import BlogHome from "@theme-hope/module/blog/components/BlogHome";
import BlogPage from "@theme-hope/module/blog/components/BlogPage";
import BloggerInfo from "@theme-hope/module/blog/components/BloggerInfo";
import InfoList from "@theme-hope/module/blog/components/InfoList";
import InfoPanel from "@theme-hope/module/blog/components/InfoPanel";
import DropTransition from "@theme-hope/components/transitions/DropTransition.vue";
import SkipLink from "@theme-hope/components/SkipLink";

import type { ComponentOptions, VNode } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Blog",

  setup() {
    const frontmatter = usePageFrontmatter();

    return (): VNode[] => [
      h(SkipLink),
      h(
        resolveComponent("CommonWrapper") as ComponentOptions,
        { sidebar: false, sidebarLinks: false },
        {
          navScreenBottom: () => h(BloggerInfo),
          sidebar: () => h(InfoList),
          default: () =>
            frontmatter.value.home
              ? h(BlogHome)
              : h(
                  "main",
                  { class: "page blog", id: "main-content" },
                  h("div", { class: "blog-page-wrapper" }, [
                    h(BlogPage),
                    h(DropTransition, { delay: 0.16 }, () => h(InfoPanel)),
                  ])
                ),
        }
      ),
    ];
  },
});

import { defineComponent, h, resolveComponent } from "vue";
import { usePageData, usePageFrontmatter } from "@vuepress/client";

import FadeSideY from "@theme-hope/components/transitions/FadeSlideY";
import SkipLink from "@theme-hope/components/SkipLink";

import type { VNode } from "vue";
import type { HopeThemePageFrontmatter } from "../../shared";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Layout",

  setup() {
    const page = usePageData();
    const frontmatter = usePageFrontmatter<HopeThemePageFrontmatter>();

    return (): VNode[] => [
      h(SkipLink),
      h(resolveComponent("CommonWrapper"), {}, () =>
        frontmatter.value.home
          ? h(resolveComponent("HomePage"))
          : h(FadeSideY, {}, () =>
              h(resolveComponent("NormalPage"), { key: page.value.path })
            )
      ),
    ];
  },
});

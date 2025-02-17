import { IconBase } from "@mr-hope/vuepress-shared/lib/client";
import { h } from "vue";
import type { FunctionalComponent } from "vue";

export const GitlabIcon: FunctionalComponent = () =>
  h(IconBase, { name: "gitlab" }, () => [
    h("circle", {
      cx: "512",
      cy: "512",
      r: "512",
      fill: "#E8F0FF",
    }),
    h("path", {
      d: "m512 848.182 134.473-413.8H377.527L512 848.182z",
      fill: "#E24329",
    }),
    h("path", {
      d: "m512 848.182-134.473-413.8h-188.36L512 848.182z",
      fill: "#FC6D26",
    }),
    h("path", {
      d: "M189.167 434.382h188.36l-80.832-249.17c-4.202-12.854-22.247-12.854-26.45 0l-81.078 249.17z",
      fill: "#E24329",
    }),
    h("path", {
      d: "m512 848.182 134.473-413.8h188.36L512 848.182z",
      fill: "#FC6D26",
    }),
    h("path", {
      d: "m834.833 434.382 40.787 125.82a27.8 27.8 0 0 1-10.135 31.147L512 848.182l322.833-413.8z",
      fill: "#FCA326",
    }),
    h("path", {
      d: "M834.833 434.382h-188.36l81.079-249.17c4.202-12.854 22.247-12.854 26.45 0l80.831 249.17z",
      fill: "#E24329",
    }),
  ]);

GitlabIcon.displayName = "GitlabIcon";

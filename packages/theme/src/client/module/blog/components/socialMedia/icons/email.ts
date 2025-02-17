import { IconBase } from "@mr-hope/vuepress-shared/lib/client";
import { h } from "vue";
import type { FunctionalComponent } from "vue";

export const EmailIcon: FunctionalComponent = () =>
  h(IconBase, { name: "email" }, () => [
    h("circle", {
      cx: "512",
      cy: "512",
      r: "512",
      fill: "#1384FF",
    }),
    h("path", {
      d: "M299.372 313.572H722.93c28.945 0 52.61 21.845 52.975 48.787L511.333 500.35 246.76 362.481c.182-27.003 23.666-48.97 52.611-48.97zm-52.671 101.702l-.243 244.121c0 27.186 23.848 49.395 52.914 49.395H722.93c29.127 0 52.975-22.21 52.975-49.395V415.152L517.522 546.71a13.957 13.957 0 01-12.682 0L246.7 415.274z",
      fill: "#fff",
    }),
  ]);

EmailIcon.displayName = "EmailIcon";

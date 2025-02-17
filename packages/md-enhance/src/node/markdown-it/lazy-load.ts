import type MarkdownIt from "markdown-it";

export const lazyLoad = (md: MarkdownIt): void => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const originalImageRender = md.renderer.rules.image!;

  md.renderer.rules.image = (tokens, idx, options, env, self): string => {
    tokens[idx].attrSet("loading", "lazy");

    return originalImageRender(tokens, idx, options, env, self);
  };
};

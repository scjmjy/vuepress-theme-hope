import { mergeViteConfig } from "./vite";

import type { App } from "@vuepress/core";
import type { ViteBundlerOptions } from "@vuepress/bundler-vite";
import type {
  WebpackBundlerOptions,
  WebpackDevServer,
} from "@vuepress/bundler-webpack";
import type { HandleFunction } from "connect";
import type { Plugin } from "vite";
import type { IncomingMessage, ServerResponse } from "http";

/**
 * Handle specific path when runing VuePress DevServe
 *
 * @param app VuePress Node App
 * @param path Path to be responsed
 * @param getResponse respond function
 * @param errMsg error msg
 */
export const useCustomDevServer = (
  app: App,
  path: string,
  getResponse: (request?: IncomingMessage) => Promise<string | Buffer>,
  errMsg = "The server encounted an error"
): void => {
  const { base, bundler, bundlerConfig } = app.options;

  // for vite
  if (app.env.isDev && bundler.endsWith("vite")) {
    const viteBundlerConfig: ViteBundlerOptions = bundlerConfig;
    const handler: HandleFunction = (
      request: IncomingMessage,
      response: ServerResponse
    ) =>
      getResponse(request)
        .then((data) => {
          response.statusCode = 200;
          response.end(data);
        })
        .catch(() => {
          response.statusCode = 500;
          response.end(errMsg);
        });

    const viteMockRequestPlugin: Plugin = {
      name: `virtual:devserver-mock/${path}`,
      configureServer: ({ middlewares }) => {
        middlewares.use(`${base.replace(/\/$/, "")}${path}`, handler);
      },
    };

    viteBundlerConfig.viteOptions = mergeViteConfig(
      viteBundlerConfig.viteOptions as Record<string, unknown>,
      { plugins: [viteMockRequestPlugin] }
    );
  }

  // for webpack
  if (app.env.isDev && bundler.endsWith("webpack")) {
    const webpackBundlerConfig: WebpackBundlerOptions = bundlerConfig;

    const { devServerSetupMiddlewares } = webpackBundlerConfig;

    webpackBundlerConfig.devServerSetupMiddlewares = (
      middlewares: WebpackDevServer.Middleware[],
      server: WebpackDevServer
    ): WebpackDevServer.Middleware[] => {
      server.app?.get(
        `${base.replace(/\/$/, "")}${path}`,
        (request, response) => {
          getResponse(request)
            .then((data) => response.status(200).send(data))
            .catch(() => response.status(500).send(errMsg));
        }
      );

      return devServerSetupMiddlewares
        ? devServerSetupMiddlewares(middlewares, server)
        : middlewares;
    };
  }
};

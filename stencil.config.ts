import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "keyboard-events",
  sourceMap: true,
  taskQueue: "async",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
  ],
};

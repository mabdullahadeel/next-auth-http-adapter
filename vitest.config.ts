/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, mergeConfig } from "vitest/config";

import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "node",
      testTimeout: 30_000,
      include: ["./src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts}"],
    },
  })
);

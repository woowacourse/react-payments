/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
import path, { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
  ],
  server: {
    host: true,
    // 또는 '0.0.0.0'
    port: 5173,
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
        },
      },
      {
        extends: true,
        test: {
          name: "unit",
          environment: "jsdom",
          globals: true,
          setupFiles: ["./src/test/setup.ts"],
          include: ["src/**/*.{test,spec}.{ts,tsx}"],
        },
      },
    ],
  },
  resolve: {
    alias: [
      { find: "@", replacement: resolve(dirname, "src") },
      { find: "@assets", replacement: resolve(dirname, "src/assets") },
      {
        find: "@components",
        replacement: resolve(dirname, "src/components"),
      },
      { find: "@pages", replacement: resolve(dirname, "src/pages") },
      { find: "@stories", replacement: resolve(dirname, "src/stories") },
      { find: "@utils", replacement: resolve(dirname, "src/utils") },
      { find: "@types", replacement: resolve(dirname, "src/types") },
      { find: "@hooks", replacement: resolve(dirname, "src/hooks") },
      { find: "@constants", replacement: resolve(dirname, "src/constants") },
      { find: "@styles", replacement: resolve(dirname, "src/styles") },
      { find: "@apis", replacement: resolve(dirname, "src/apis") },
    ],
  },
});

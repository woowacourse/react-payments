import type { StorybookConfig } from "@storybook/react-vite";
import react from "@vitejs/plugin-react";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/react-vite",
  viteFinal: async (config) => {
    const flatPlugins = ((config.plugins as any) ?? []).flat(Infinity);
    config.plugins = [
      ...flatPlugins.filter((plugin: any) => {
        if (!plugin) return false;
        const name = (plugin as any).name ?? "";
        return !name.startsWith("react-router");
      }),
      react(),
    ];
    return config;
  },
};
export default config;

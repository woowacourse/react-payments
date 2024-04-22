import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: "@components", replacement: "/src/components" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@constants", replacement: "/src/constants" },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@style", replacement: "/src/style" },
      { find: "@types", replacement: "/src/types" },
      { find: "@", replacement: "/src" },
    ],
  },
});

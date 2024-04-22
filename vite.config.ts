import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  base: "/react-payments/",
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "src") },
      { find: "@pages", replacement: resolve(__dirname, "src/components") },
    ],
  },
});

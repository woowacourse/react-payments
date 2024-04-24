import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-payments/dist/',
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@src', replacement: resolve(__dirname, 'src') },
      { find: '@components', replacement: resolve(__dirname, 'src/components') },
      { find: '@styles', replacement: resolve(__dirname, 'src/styles') },
      { find: '@assets', replacement: resolve(__dirname, 'src/assets') },
      { find: '@constants', replacement: resolve(__dirname, 'src/constants') },
      { find: '@types', replacement: resolve(__dirname, 'src/types') },
      { find: '@utils', replacement: resolve(__dirname, 'src/utils') },
      { find: '@hooks', replacement: resolve(__dirname, 'src/hooks') },
      { find: '@pages', replacement: resolve(__dirname, 'src/pages') },
    ],
  },
});

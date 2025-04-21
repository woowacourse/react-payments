import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-payments/',
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@components', replacement: '/src/components' },
      // "@commonComponents/*": ["src/components/common/*"],
      { find: '@commonComponents', replacement: '/src/components/common' },

      {
        find: '@InputSectionComponents',
        replacement: '/src/components/InputSection',
      },
      {
        find: '@CardDisplayComponents',
        replacement: '/src/components/CardDisplay',
      },
      { find: '@hooks', replacement: '/src/hooks' },

      { find: '@assets', replacement: '/src/assets' },
    ],
  },
});

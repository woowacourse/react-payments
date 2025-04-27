import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default {
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
};

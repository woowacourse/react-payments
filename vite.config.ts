import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { PRODUCTION_BASE_URL } from './src/constants/router';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: PRODUCTION_BASE_URL,
});

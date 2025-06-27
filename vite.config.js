import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
 build: {
  lib: {
    entry: 'src/index.js',
    name: 'ReactAlert',
    fileName: (format) => `index.${format}.js`,
  },
  rollupOptions: {
    external: ['react', 'react-dom', 'lottie-react'],
    output: {
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'lottie-react': 'Lottie'
      }
    }
  }
}

});

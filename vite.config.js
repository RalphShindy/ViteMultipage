import { defineConfig } from "vite";
import { resolve } from 'path';
import { glob } from 'glob';

let entrypoints = glob.sync('src/*.html');
console.log(entrypoints);

export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    emptyOutDir: true,
    outDir: '../dist',
    rollupOptions: {
        input: entrypoints,
    }
  },
});
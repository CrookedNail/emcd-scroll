import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    root: '.',
    resolve: {
        alias: [
            { find: '~', replacement: resolve(__dirname, '.') },
            { find: '@', replacement: resolve(__dirname, '.') },
        ],
    },
});

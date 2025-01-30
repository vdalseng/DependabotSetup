import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        chunkSizeWarningLimit: 500,
        rollupOptions: {
            external: [],
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    // Add other libraries or modules you want to split into separate chunks
                },
            },
        },
    },
});
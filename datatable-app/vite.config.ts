import autoprefixer from "autoprefixer"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "localhost",
    port: 3000,
    strictPort: true,
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  plugins: [react()],
})

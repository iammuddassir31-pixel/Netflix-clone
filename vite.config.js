import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for the Netflix Clone project
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})

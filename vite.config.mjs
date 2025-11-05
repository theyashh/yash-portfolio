import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/yash-portfolio/', // 👈 this is CRUCIAL for GitHub Pages
  build: {
    outDir: 'dist'
  }
})

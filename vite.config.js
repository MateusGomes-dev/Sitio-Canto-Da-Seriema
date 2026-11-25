import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// base './' permite publicar em qualquer caminho (ex.: GitHub Pages em /nome-do-repo/)
export default defineConfig({ base: './', plugins: [react()] })

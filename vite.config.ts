import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

/* GitHub Pages serve solo file statici e non conosce le route del client
   router: aprendo direttamente /privacy o /come-raggiungerci risponderebbe con
   la propria pagina di errore. Pubblicando la stessa index.html anche come
   404.html, Pages la restituisce per qualsiasi percorso sconosciuto mantenendo
   l'URL richiesto, così React Router monta la pagina giusta. */
function spaFallback(): Plugin {
  let outDir = 'dist'
  return {
    name: 'spa-404-fallback',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
    },
    closeBundle() {
      const index = path.resolve(__dirname, outDir, 'index.html')
      if (fs.existsSync(index)) {
        fs.copyFileSync(index, path.resolve(__dirname, outDir, '404.html'))
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/DimoraChecca/',
  plugins: [react(), tailwindcss(), spaFallback()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

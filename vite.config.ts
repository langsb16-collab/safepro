import pages from '@hono/vite-cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      plugins: [react()],
      build: {
        outDir: 'dist/assets',
        lib: {
          entry: 'src/client.tsx',
          name: 'SafeProClient',
          formats: ['es'],
          fileName: () => 'client.js'
        },
        rollupOptions: {
          external: [],
          output: {
            inlineDynamicImports: true
          }
        }
      }
    }
  }
  
  return {
    plugins: [
      pages(),
      devServer({
        entry: 'src/index.tsx'
      })
    ],
    build: {
      outDir: 'dist'
    }
  }
})

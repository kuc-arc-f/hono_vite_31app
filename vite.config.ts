import { defineConfig } from 'vite'
import { resolve } from 'path'
import devServer from '@hono/vite-dev-server'
import pages from '@hono/vite-cloudflare-pages'
//
export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      build: {
        lib: {
          entry: [
            './src/client.ts',
            './src/client/Page2.ts',
            './src/client/Page4.ts',
            './src/client/TaskShow.ts',
            './src/client/TaskIndex.ts',
            './src/client/TaskEdit.ts',
            './src/client/ErChartIndex.ts',
            './src/client/MermaidImport.ts',
          ],
          formats: ['es'],
          fileName: '[name]',
        },
        rollupOptions: {
          output: {
            dir: './dist/static'
          }
        },
        emptyOutDir: false,
        copyPublicDir: false
      }
    }
  } else {
    return {
      plugins: [
        pages(),
        devServer({
          entry: 'src/index.tsx',
          cf: {
            d1Databases: ['DB'],
            d1Persist: true
          }
        })
      ]
    }
  }
})

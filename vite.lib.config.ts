import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

const root = dirname(fileURLToPath(import.meta.url))

function injectCssImport(): Plugin {
  return {
    name: 'inject-css-import',
    writeBundle(options) {
      const dir = options.dir ?? resolve(root, 'dist')
      const jsPath = resolve(dir, 'index.js')
      const cssPath = resolve(dir, 'index.css')

      if (!existsSync(jsPath) || !existsSync(cssPath)) {
        return
      }

      const js = readFileSync(jsPath, 'utf8')
      const statement = `import './index.css'\n`

      if (!js.startsWith(statement)) {
        writeFileSync(jsPath, `${statement}${js}`)
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), injectCssImport()],
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(root, 'src/index.lib.ts'),
      formats: ['es'],
      fileName: () => 'index.js',
      cssFileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
    },
  },
})

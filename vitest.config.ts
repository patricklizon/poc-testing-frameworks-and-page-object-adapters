import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, "src/**/*.browser.*",'e2e/**/**', 'cypress/**', 'playwright/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    }
  }),
)
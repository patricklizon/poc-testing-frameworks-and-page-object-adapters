import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'


export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      include: ["src/**/*.browser*", "src/**/*.spec*"],
      exclude: [...configDefaults.exclude, 'e2e/**/**', 'cypress/**', 'playwright/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      browser: {
        provider: 'playwright',
        instances: [
          { browser: 'chromium' },
        ],
      }
    }
  }),
)




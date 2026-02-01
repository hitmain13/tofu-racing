import baseConfig from '../../packages/config/tailwind/tailwind.config'
import type { Config } from 'tailwindcss'

const config: Config = {
  ...baseConfig,
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ]
}

export default config

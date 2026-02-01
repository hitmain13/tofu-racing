import type { ExpoConfig } from 'expo/config'

const config: ExpoConfig = {
  name: 'Tofu Racing',
  slug: 'tofu-racing',
  scheme: 'tofuracing',
  version: '0.0.1',
  extra: {
    apiUrl: process.env.API_URL
  }
}

export default config

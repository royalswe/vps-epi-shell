import type { Config } from 'vite-plugin-ssr/types'

// https://vite-plugin-ssr.com/config
export default {
  passToClient: ['pageProps', 'initialStoreState', 'locale', 'user', 'market', 'documentProps'],
  meta: {
    onBeforeRender: {
      //onBeforeRender ony runs on the server
      env: { server: true, client: false }
    }
  }
} satisfies Config

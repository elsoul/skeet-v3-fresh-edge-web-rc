import { App, fsRoutes, staticFiles, trailingSlashes } from 'fresh'
import { i18nPlugin } from 'fresh-i18n'
import type { ExtendedState } from '@/utils/state.ts'

export const app = new App<ExtendedState>({
  root: import.meta.url,
})
  .use(staticFiles())
  .use(trailingSlashes('never'))
  .use(i18nPlugin({
    languages: ['en', 'ja'],
    defaultLanguage: 'en',
    localesDir: './locales',
  }))

await fsRoutes(app, {
  loadIsland: (path) => import(`./islands/${path}`),
  loadRoute: (path) => import(`./routes/${path}`),
})

if (import.meta.main) {
  await app.listen()
}

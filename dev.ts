#!/usr/bin/env -S deno run -A --watch=static/,routes/,posts/

import { Builder } from 'fresh/dev'
import { app } from './main.ts'
import { tailwind } from '@fresh/plugin-tailwind'
import { saveSitemapAndRobots } from 'fresh-sitemap'
import { appInfo } from '@/config.ts'
import { generateDatePostsIndex } from '@/scripts/generateNewsIndex.ts'

const builder = new Builder({ target: 'safari12' })
tailwind(builder, app, {})

await generateDatePostsIndex({
  kind: 'news',
  path: 'posts/news',
  exportPath: 'generated/newsPostsIndex.ts',
  languages: ['en', 'ja'],
})

if (Deno.args.includes('build')) {
  await saveSitemapAndRobots({
    basename: `https://${appInfo.domain}`,
    distDirectory: 'routes',
    postsDirectory: 'posts',
    sitemapPath: 'static/sitemap.xml',
    robotsPath: 'static/robots.txt',
    options: { languages: ['en', 'ja'], defaultLanguage: 'en' },
  })
  await builder.build(app)
} else {
  await builder.listen(app, { port: 4200 })
}

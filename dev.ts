#!/usr/bin/env -S deno run -A --watch=static/,routes/

import { Builder } from 'fresh/dev'
import { app } from './main.ts'
import { tailwind } from '@fresh/plugin-tailwind'
import { saveSitemapAndRobots } from 'fresh-sitemap'
import { appInfo } from '@/config.ts'

const builder = new Builder({ target: 'safari12' })
tailwind(builder, app, {})

if (Deno.args.includes('build')) {
  await saveSitemapAndRobots(
    `https://${appInfo.domain}`,
    './routes',
    './articles',
    './static/sitemap.xml',
    './static/robots.txt',
    { languages: ['en', 'ja'], defaultLanguage: 'en' },
  )
  await builder.build(app)
} else {
  await builder.listen(app, { port: 4200 })
}

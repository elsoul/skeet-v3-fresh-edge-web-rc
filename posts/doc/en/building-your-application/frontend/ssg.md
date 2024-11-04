---
id: building-your-application-frontend-ssg
title: Deploy Static Site
description: Deploy Static Site Skeet Framework
---

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

**Bold Text**

_Italic Text_

~~Strikethrough Text~~

- Unordered List Item 1
- Unordered List Item 2
  - Nested Unordered List Item 1
  - Nested Unordered List Item 2

1. Ordered List Item 1
2. Ordered List Item 2
   1. Nested Ordered List Item 1
   2. Nested Ordered List Item 2

Testing `Inline code snippet` like this.

```javascript
// Code block
console.log('Hello, World!')
```

---

## Code Sample

```ts main.ts
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
```

## YouTube Embed

https://www.youtube.com/watch?v=t4KHXqguTi8

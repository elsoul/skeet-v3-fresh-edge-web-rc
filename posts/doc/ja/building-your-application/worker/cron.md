---
id: building-your-application-worker-cron
title: Cron Worker をデプロイ
description: Cron Worker をデプロイ Skeet Framework
---

# 見出し 1

## 見出し 2

### 見出し 3

#### 見出し 4

**太字**

_斜体_

~~取り消し線~~

- 箇条書きアイテム 1
- 箇条書きアイテム 2
  - ネストされた箇条書きアイテム 1
  - ネストされた箇条書きアイテム 2

1. 番号付きリストアイテム 1
2. 番号付きリストアイテム 2
   1. ネストされた番号付きリストアイテム 1
   2. ネストされた番号付きリストアイテム 2

インラインコードスニペットを`Testing`です。

```javascript
// コードブロック
console.log('Hello, World!')
```

---

## コードサンプル

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

## YouTube 埋め込み

https://www.youtube.com/watch?v=Hivsa0cgFqU

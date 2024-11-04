import { define } from '@/utils/state.ts'
import { asset } from 'fresh/runtime'
import { page } from 'fresh'
import CTARow from '@/routes/[locale]/(default)/(_rows)/CTARow.tsx'
import ProductsSlideRow from '@/islands/rows/products/ProductsSlideRow.tsx'
import NewsIndexRow from '@/islands/rows/news/NewsIndexRow.tsx'

export const handler = define.handlers({
  GET(ctx) {
    ctx.state.title = 'news.title'
    ctx.state.description = 'metadata.description'
    ctx.state.ogImage = new URL(asset('/ogp.jpg'), ctx.url).href
    return page()
  },
})

export default define.page<typeof handler>(function NewsIndex(props) {
  return (
    <>
      <NewsIndexRow defaultShowCounts={12} />
      <CTARow state={props.state} />
      <ProductsSlideRow />
    </>
  )
})

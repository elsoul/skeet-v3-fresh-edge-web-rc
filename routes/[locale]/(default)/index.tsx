import { define } from '@/utils/state.ts'
import { asset } from 'fresh/runtime'
import { page } from 'fresh'
import HomeHeroRow from '@/routes/[locale]/(default)/(_rows)/HomeHeroRow.tsx'
import CTARow from '@/routes/[locale]/(default)/(_rows)/CTARow.tsx'

export const handler = define.handlers({
  GET(ctx) {
    ctx.state.title = 'metadata.homeTitle'
    ctx.state.description = 'metadata.description'
    ctx.state.ogImage = new URL(asset('/ogp.jpg'), ctx.url).href

    return page()
  },
})

export default define.page<typeof handler>(function Home(props) {
  return (
    <>
      <HomeHeroRow state={props.state} />
      <CTARow state={props.state} />
    </>
  )
})

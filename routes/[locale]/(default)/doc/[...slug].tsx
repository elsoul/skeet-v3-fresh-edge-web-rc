import { define } from '@/utils/state.ts'
import { asset } from 'fresh/runtime'
import { HttpError, page } from 'fresh'
import { getAllPaths, getPost } from '@/utils/posts.ts'
import { frontMatter, renderMarkdown } from '@/utils/markdown.ts'
import { cn } from '@/lib/utils.ts'
import { mainShardGradation } from '@/components/utils/tailwinds.ts'
import Toc from '@/islands/posts/Toc.tsx'
import DocHeader from '@/islands/layouts/doc/DocHeader.tsx'
import { docMenuData } from '@/islands/layouts/doc/docNavs.ts'
import DocPager from '@/islands/layouts/doc/DocPager.tsx'

const kind = 'doc'

const pattern = new URLPattern({
  pathname: `/:locale/${kind}/:page*`,
})

export const handler = define.handlers({
  async GET(ctx) {
    const match = pattern.exec(ctx.url.href)
    if (!match) {
      throw new HttpError(404)
    }

    const post = await getPost({
      kind,
      slug: ctx.params.slug,
      locale: ctx.params.locale,
    })

    if (!post) {
      throw new HttpError(404)
    }

    const { body, attrs } = frontMatter<Record<string, string>>(post)

    ctx.state.title = attrs.title
    ctx.state.description = attrs.description
    ctx.state.ogImage = new URL(asset(`ogp.jpg`), ctx.url).href

    const allPosts = getAllPaths(docMenuData)
    if (!allPosts) {
      throw new HttpError(404)
    }

    const postPath = `/${kind}/${ctx.params.slug}`
    const currentIndex = allPosts.findIndex((post) => post.path === postPath)

    const pagerData = {
      nextPage: allPosts[currentIndex + 1],
      prevPage: allPosts[currentIndex - 1],
    }

    return page({
      page: {
        ctx,
        body,
        attrs,
        pagerData,
      },
    })
  },
})

export default define.page<typeof handler>(function DocSlugPage(props) {
  const { html, headings } = renderMarkdown(props.data.page.body)
  return (
    <>
      <DocHeader headings={headings} />
      <div className='mx-auto max-w-4xl p-3 md:py-8'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          <div className='p-4 md:col-span-2 flex flex-col gap-12'>
            <h1
              className={cn(
                'text-3xl font-bold tracking-tight',
                mainShardGradation,
              )}
            >
              {props.state.title}
            </h1>
            <div
              class='prose prose-zinc dark:prose-invert'
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <DocPager pagerData={props.data.page.pagerData} />
          </div>
          <div className='max-h-full p-4 md:col-span-1'>
            <div
              className={cn(
                'scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full',
                'scrollbar-track-white scrollbar-thumb-zinc-300 dark:scrollbar-track-zinc-950 dark:scrollbar-thumb-zinc-600',
                'hidden md:sticky md:top-32 md:block',
                'overflow-auto max-h-[calc(100vh-10rem)]',
              )}
            >
              <Toc headings={headings} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
})

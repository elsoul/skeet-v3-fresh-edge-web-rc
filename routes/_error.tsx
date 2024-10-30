import { HttpError, type PageProps } from 'fresh'
import { cn } from '@/lib/utils.ts'
import { basicBgColor, basicTextColor } from '@/components/utils/tailwinds.ts'
import DefaultHeader from '@/islands/layouts/default/DefaultHeader.tsx'
import DefaultFooter from '@/islands/layouts/default/DefaultFooter.tsx'

export function ServerCodePage(
  props: { serverCode: number; codeDescription: string },
) {
  return (
    <>
      <div
        class={cn('flex flex-col', basicBgColor, basicTextColor)}
      >
        <DefaultHeader />
        <section class='min-h-screen -translate-y-32 flex flex-col items-center justify-center'>
          <div class='text-center'>
            <h1 class='text-6xl md:text-9xl font-bold tracking-tight'>
              {props.serverCode}
            </h1>

            <p class='p-4 text-2xl md:text-3xl tracking-tight'>
              {props.codeDescription}
            </p>

            <p class='p-4 tracking-tight'>
              <a href='/' class='hover:underline'>Back to the Homepage</a>
            </p>
          </div>
        </section>
        <DefaultFooter />
      </div>
    </>
  )
}

export default function PageNotFound(props: PageProps) {
  const error = props.error
  if (error instanceof HttpError) {
    if (error.status === 404) {
      return ServerCodePage({
        serverCode: 404,
        codeDescription: 'Couldn’t find what you’re looking for.',
      })
    }
  }

  return ServerCodePage({
    serverCode: 500,
    codeDescription: 'Oops! Something went wrong.',
  })
}

import type { PageProps } from 'fresh'
import DefaultHeader from '@/islands/layouts/default/DefaultHeader.tsx'
import DefaultFooter from '@/islands/layouts/default/DefaultFooter.tsx'
import { cn } from '@/lib/utils.ts'
import { basicBgColor } from '@/components/utils/tailwinds.ts'

export default function DefaultLayout(
  { Component }: PageProps,
) {
  return (
    <>
      <div class={cn('flex flex-col', basicBgColor)}>
        <DefaultHeader />
        <main class='min-h-screen'>
          <Component />
        </main>
        <DefaultFooter />
      </div>
    </>
  )
}

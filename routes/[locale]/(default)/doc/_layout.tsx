import type { PageProps } from 'fresh'
import { cn } from '@/lib/utils.ts'
import DocMenu from '@/islands/layouts/doc/DocMenu.tsx'

export default function DocLayout(
  { Component }: PageProps,
) {
  return (
    <>
      <div className='mx-auto max-w-7xl lg:py-8'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-9'>
          <div className='lg:col-span-2'>
            <div
              className={cn(
                'overflow-auto scrollbar-thin',
                'scrollbar-thumb-rounded-full scrollbar-track-rounded-full',
                'scrollbar-track-white   dark:scrollbar-thumb-zinc-600',
                'scrollbar-thumb-zinc-300 dark:scrollbar-track-zinc-950',
                'hidden max-h-[calc(100vh-10rem)] lg:sticky lg:top-32 lg:block',
              )}
            >
              <DocMenu />
            </div>
          </div>
          <div className='lg:col-span-7'>
            <Component />
          </div>
        </div>
      </div>
    </>
  )
}

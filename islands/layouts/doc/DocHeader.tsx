import { cn } from '@/lib/utils.ts'
import { useShowHeader } from '@/hooks/utils/useShowHeader.ts'
import { lightBorderColor } from '@/components/utils/tailwinds.ts'
import TocMenuModalNav from '@/islands/layouts/posts/TocMenuModalNav.tsx'
import { MarkdownHeading } from '@/utils/markdown.ts'
import DocMenuModalNav from '@/islands/layouts/doc/DocMenuModalNav.tsx'

type Props = {
  headings: MarkdownHeading[]
}

export default function DocHeader({ headings }: Props) {
  const showHeader = useShowHeader()
  return (
    <>
      <div
        className={cn(
          'sticky top-16 z-20',
          'w-full -mt-8 mb-8 px-6 py-2',
          'border-b border-t',
          lightBorderColor,
          'backdrop-blur-xl bg-opacity-70 dark:bg-opacity-20',
          'transition-transform duration-300 ease-in-out',
          'flex flex-row gap-10 lg:hidden items-center justify-center',
          showHeader.value
            ? '-translate-y-1 md:translate-y-0'
            : '-translate-y-96',
        )}
      >
        <div>
          <DocMenuModalNav />
        </div>
        <div className='flex flex-grow' />
        <div class='md:hidden'>
          <TocMenuModalNav headings={headings} />
        </div>
      </div>
    </>
  )
}

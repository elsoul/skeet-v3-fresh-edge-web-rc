import { MarkdownHeading } from '@/utils/markdown.ts'
import { cn } from '@/lib/utils.ts'
import { useTranslation } from '@/hooks/i18n/useTranslation.ts'
import { useActiveHeading } from '@/hooks/posts/useActiveHeading.ts'
import { linkActiveColor, linkMenuColor } from '@/components/utils/tailwinds.ts'

type Props = {
  headings: MarkdownHeading[]
}

export default function Toc({ headings }: Props) {
  const t = useTranslation()
  const activeId = useActiveHeading(headings)

  return (
    <>
      {headings.length > 0 && (
        <>
          <div className='p-4 lg:ml-6'>
            <p className='text-base font-semibold tracking-tight'>
              {t('common.tableOfContents')}
            </p>
          </div>
          <div className='border-l px-4 py-1 lg:ml-6'>
            <nav className='space-y-1' aria-label='Sidebar'>
              {headings.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    activeId === item.id ? linkActiveColor : linkMenuColor,
                    `block py-2 text-sm hover:opacity-70 ml-${item.depth * 4}`,
                  )}
                >
                  <span className='break-words'>{item.html}</span>
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  )
}

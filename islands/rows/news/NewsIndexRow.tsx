import { useSignal } from '@preact/signals'
import { newsPosts } from '@/generated/newsPostsIndex.ts'
import { useLocale } from '@/hooks/i18n/useLocale.ts'
import Link from '@/components/utils/Link.tsx'
import Button from '@/components/ui/Button.tsx'
import { useTranslation } from '@/hooks/i18n/useTranslation.ts'
import { cn } from '@/lib/utils.ts'
import {
  basicTextColor,
  lightBorderColor,
  mainShardGradation,
} from '@/components/utils/tailwinds.ts'

type Props = {
  defaultShowCounts: number
}

export default function NewsIndexRow({ defaultShowCounts }: Props) {
  const visibleCount = useSignal(defaultShowCounts)
  const t = useTranslation()
  const { locale } = useLocale()

  const allNews = useSignal(newsPosts[locale as keyof typeof newsPosts] || [])

  const visibleNews = allNews.value.slice(0, visibleCount.value)

  const loadMore = () => {
    visibleCount.value += defaultShowCounts
  }

  return (
    <div className='mx-auto max-w-7xl p-3 flex flex-col gap-12 my-24'>
      <h3
        class={cn(
          'text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight',
          mainShardGradation,
        )}
      >
        News
      </h3>
      <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3'>
        {visibleNews.map((news) => (
          <div
            key={news.path}
            className={cn(
              'flex flex-col',
              'shadow-sm',
              'border rounded-xl',
              lightBorderColor,
            )}
          >
            <Link href={news.path} className='hover:opacity-80'>
              <img
                src={news.thumbnail}
                alt={news.title}
                className='w-full rounded-t-xl'
              />
            </Link>

            <div className='border-t border-zinc-200 p-4 dark:border-zinc-500'>
              <Link href={news.path} className='hover:opacity-80'>
                <time
                  dateTime={news.date.replaceAll('-', '.')}
                  className='text-xs text-zinc-500 dark:text-zinc-400'
                >
                  {news.date.replaceAll('-', '.')}
                </time>
                <h3
                  className={cn(
                    'mt-1 font-bold tracking-tight',
                    basicTextColor,
                  )}
                >
                  {news.title}
                </h3>
              </Link>
            </div>
            <div className='flex-grow' />
            <div className='px-4 pb-3 pt-1'>
              <Link href={news.path}>
                <Button variant='outline' class={cn('w-full')}>
                  {t('common.readThisArticle')}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {visibleCount.value < allNews.value.length && (
        <div className='flex justify-center'>
          <Button variant='outline' onClick={loadMore}>
            {t('common.loadMore')}
          </Button>
        </div>
      )}
    </div>
  )
}

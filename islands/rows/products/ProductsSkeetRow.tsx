import Button from '@/components/ui/Button.tsx'
import { cn } from '@/lib/utils.ts'
import {
  lightTextColor,
  mainShardGradation,
} from '@/components/utils/tailwinds.ts'
import { asset } from 'fresh/runtime'
import {
  ELSOUL_DISCORD_INVITE_LINK,
  SKEET_WEB_LINK,
} from '@/constants/links.ts'
import { Discord } from 'iconoir-react'
import { useTranslation } from '@/hooks/i18n/useTranslation.ts'

export default function ProductsSkeetRow() {
  const t = useTranslation()
  return (
    <>
      <div
        className={cn(
          'grid items-center justify-center md:grid-cols-2',
          'gap-4 sm:gap-8 md:gap-16 lg:gap-24',
          'mx-auto max-w-7xl px-6 py-24',
        )}
      >
        <div className='w-full md:order-last'>
          <a
            href={`${SKEET_WEB_LINK}`}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:opacity-80'
          >
            <img
              src={asset('/img/products/Skeet.jpg')}
              alt='Skeet'
              className='w-full rounded-lg shadow-lg'
            />
          </a>
        </div>
        <div className='grid w-full gap-4 md:order-first'>
          <h2
            className={cn(
              'py-2 text-3xl font-extrabold tracking-tighter sm:text-4xl',
              mainShardGradation,
            )}
          >
            {t('common.ProductsSkeetRow.title')}
          </h2>
          <p
            className={cn(
              'max-w-xl text-lg font-medium tracking-tight sm:text-xl',
              lightTextColor,
            )}
          >
            {t('common.ProductsSkeetRow.body')}
          </p>
          <div className='flex flex-wrap gap-3 pt-6'>
            <a
              href={`${SKEET_WEB_LINK}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button>{t('common.ProductsSkeetRow.button1')}</Button>
            </a>
            <a
              href={`${ELSOUL_DISCORD_INVITE_LINK}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button variant='outline'>
                <Discord className='mr-2 h-5 w-5' />
                {t('common.ProductsSkeetRow.button2')}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

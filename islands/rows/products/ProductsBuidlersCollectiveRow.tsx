import Button from '@/components/ui/Button.tsx'
import { cn } from '@/lib/utils.ts'
import {
  lightTextColor,
  mainShardGradation,
} from '@/components/utils/tailwinds.ts'
import { asset } from 'fresh/runtime'
import {
  BUIDLERS_COLLECTIVE_WEB_LINK,
  EPICS_DAO_DISCORD_INVITE_LINK,
} from '@/constants/links.ts'
import { Discord } from 'iconoir-react'
import { useTranslation } from '@/hooks/i18n/useTranslation.ts'
import { BUIDLERS_COLLECTIVE_PRODUCT_IMG } from '@/components/utils/img.ts'

export default function ProductsBuidlersCollectiveRow() {
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
            href={`${BUIDLERS_COLLECTIVE_WEB_LINK}`}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:opacity-80'
          >
            <img
              src={asset(BUIDLERS_COLLECTIVE_PRODUCT_IMG)}
              alt='Buidlers Collective'
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
            {t('common.ProductsBuidlersCollectiveRow.title')}
          </h2>
          <p
            className={cn(
              'max-w-xl text-lg font-medium tracking-tight sm:text-xl',
              lightTextColor,
            )}
          >
            {t('common.ProductsBuidlersCollectiveRow.body')}
          </p>
          <div className='flex flex-wrap gap-3 pt-6'>
            <a
              href={`${BUIDLERS_COLLECTIVE_WEB_LINK}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button>
                {t('common.ProductsBuidlersCollectiveRow.button1')}
              </Button>
            </a>
            <a
              href={`${EPICS_DAO_DISCORD_INVITE_LINK}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button variant='outline'>
                <Discord className='mr-2 h-5 w-5' />
                {t('common.ProductsBuidlersCollectiveRow.button2')}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

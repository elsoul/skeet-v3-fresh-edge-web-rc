import Button from '@/components/ui/Button.tsx'
import { cn } from '@/lib/utils.ts'
import {
  blightTextColor,
  mainShardGradation,
} from '@/components/utils/tailwinds.ts'
import { asset } from 'fresh/runtime'
import {
  EPICS_DAO_DISCORD_INVITE_LINK,
  EPICS_DAO_WEB_LINK,
} from '@/constants/links.ts'
import { Discord } from 'iconoir-react'
import { useTranslation } from '@/hooks/i18n/useTranslation.ts'
import { EPICS_DAO_PRODUCT_IMG } from '@/components/utils/img.ts'

export default function ProductsEpicsDAORow() {
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
        <div className='w-full'>
          <a
            href={`${EPICS_DAO_WEB_LINK}`}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:opacity-80'
          >
            <img
              src={asset(EPICS_DAO_PRODUCT_IMG)}
              alt='Epics DAO'
              className='w-full rounded-lg shadow-lg'
            />
          </a>
        </div>
        <div className='grid w-full gap-4'>
          <h2
            className={cn(
              'py-2 text-3xl font-extrabold tracking-tighter sm:text-4xl',
              mainShardGradation,
            )}
          >
            {t('common.ProductsEpicsDAORow.title')}
          </h2>
          <p
            className={cn(
              'max-w-xl text-lg font-medium tracking-tight sm:text-xl',
              blightTextColor,
            )}
          >
            {t('common.ProductsEpicsDAORow.body')}
          </p>
          <div className='flex flex-wrap gap-3 pt-6'>
            <a
              href={`${EPICS_DAO_WEB_LINK}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button>{t('common.ProductsEpicsDAORow.button1')}</Button>
            </a>
            <a
              href={`${EPICS_DAO_DISCORD_INVITE_LINK}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button variant='outline'>
                <Discord className='mr-2 h-5 w-5' />
                {t('common.ProductsEpicsDAORow.button2')}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

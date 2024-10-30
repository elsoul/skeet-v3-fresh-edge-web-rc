import { appInfo } from '@/config.ts'
import Button from '@/components/ui/Button.tsx'
import { cn } from '@/lib/utils.ts'
import { mainShardGradation } from '@/components/utils/tailwinds.ts'
import type { ExtendedState } from '@/utils/state.ts'
import { createTranslator } from 'fresh-i18n'
import { Discord } from 'iconoir-react'

type Props = {
  state: ExtendedState
}

export default function CTARow({ state }: Props) {
  const t = createTranslator(state.translationData)

  return (
    <>
      <div className='mx-auto max-w-7xl px-6 py-32 sm:py-64 lg:flex lg:items-center lg:justify-between'>
        <div>
          <h2
            className={cn(
              'py-2 text-5xl font-extrabold tracking-tighter sm:text-5xl',
              mainShardGradation,
            )}
          >
            {t('common.CTARow.title')}
          </h2>
          <p className='max-w-xl text-lg font-medium tracking-tight text-zinc-500 dark:text-zinc-400 sm:text-xl'>
            {t('common.CTARow.body')}
          </p>
        </div>

        <div className='mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0'>
          <a
            href={appInfo.discordInviteURL}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button>
              <Discord className='mr-2 h-5 w-5' />
              {t('common.CTARow.button')}
            </Button>
          </a>
        </div>
      </div>
    </>
  )
}

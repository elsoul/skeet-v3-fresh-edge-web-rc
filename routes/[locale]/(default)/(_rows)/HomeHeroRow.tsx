import Button from '@/components/ui/Button.tsx'
import { appInfo } from '@/config.ts'
import { asset } from 'fresh/runtime'
import {
  blightTextColor,
  mainShardGradation,
} from '@/components/utils/tailwinds.ts'
import { cn } from '@/lib/utils.ts'
import type { ExtendedState } from '@/utils/state.ts'
import { createTranslator } from 'fresh-i18n'
import { Github } from 'iconoir-react'
import Image from '@/islands/ui/Image.tsx'
import {
  CLOUDFLARE_LINK,
  DENO_LINK,
  EXPO_LINK,
  FRESH_LINK,
  NEON_LINK,
  PRISMA_LINK,
  SOLANA_COM_LINK,
} from '@/constants/links.ts'
import {
  CLOUD_FLARE_LOGO_HORIZONTAL,
  CLOUD_FLARE_LOGO_INVERT_HORIZONTAL,
  DENO_LOGO_HORIZONTAL,
  DENO_LOGO_INVERT_HORIZONTAL,
  EXPO_LOGO_HORIZONTAL,
  EXPO_LOGO_INVERT_HORIZONTAL,
  FRESH_LOGO_HORIZONTAL,
  FRESH_LOGO_INVERT_HORIZONTAL,
  ICON_OPOS_COMPRESSED_COIL,
  ICON_OPOS_SAGA_PHONE,
  NEON_LOGO_HORIZONTAL,
  NEON_LOGO_INVERT_HORIZONTAL,
  PRISMA_LOGO_HORIZONTAL,
  PRISMA_LOGO_INVERT_HORIZONTAL,
  SOLANA_LOGO_HORIZONTAL,
  SOLANA_LOGO_INVERT_HORIZONTAL,
} from '@/components/utils/img.ts'

const logos = [
  {
    title: 'CloudFlare',
    logo: asset(CLOUD_FLARE_LOGO_HORIZONTAL),
    logoInvert: asset(CLOUD_FLARE_LOGO_INVERT_HORIZONTAL),
    href: CLOUDFLARE_LINK,
  },
  {
    title: 'Deno',
    logo: asset(DENO_LOGO_HORIZONTAL),
    logoInvert: asset(DENO_LOGO_INVERT_HORIZONTAL),
    href: DENO_LINK,
  },
  {
    title: 'Neon',
    logo: asset(NEON_LOGO_HORIZONTAL),
    logoInvert: asset(NEON_LOGO_INVERT_HORIZONTAL),
    href: NEON_LINK,
  },
  {
    title: 'Prisma',
    logo: asset(PRISMA_LOGO_HORIZONTAL),
    logoInvert: asset(PRISMA_LOGO_INVERT_HORIZONTAL),
    href: PRISMA_LINK,
  },
  {
    title: 'Solana',
    logo: asset(SOLANA_LOGO_HORIZONTAL),
    logoInvert: asset(SOLANA_LOGO_INVERT_HORIZONTAL),
    href: SOLANA_COM_LINK,
  },
  {
    title: 'Fresh',
    logo: asset(FRESH_LOGO_HORIZONTAL),
    logoInvert: asset(FRESH_LOGO_INVERT_HORIZONTAL),
    href: FRESH_LINK,
  },
  {
    title: 'Expo',
    logo: asset(EXPO_LOGO_HORIZONTAL),
    logoInvert: asset(EXPO_LOGO_INVERT_HORIZONTAL),
    href: EXPO_LINK,
  },
]

type Props = {
  state: ExtendedState
}

export default function HomeHeroRow(
  { state }: Props,
) {
  const t = createTranslator(state.translationData)
  return (
    <>
      <div className='relative mx-auto max-w-7xl p-3'>
        <div className='absolute left-0 top-0 opacity-20 dark:opacity-40'>
          <img
            src={asset(ICON_OPOS_COMPRESSED_COIL)}
            alt='Background'
            className='h-56 w-56 sm:h-64 sm:w-64 md:h-96 md:w-96 lg:h-[512px] lg:w-[512px]'
          />
        </div>

        <div className='absolute bottom-0 right-0 opacity-20 dark:opacity-40'>
          <img
            src={asset(ICON_OPOS_SAGA_PHONE)}
            alt='Background'
            className='h-56 w-56 sm:h-64 sm:w-64 md:h-96 md:w-96 lg:h-[512px] lg:w-[512px]'
          />
        </div>

        <div className='relative mx-auto flex z-10 max-w-3xl flex-col items-center gap-6 py-24 md:py-40 lg:max-w-4xl'>
          <h1
            className={cn(
              'py-2 text-center text-4xl font-bold tracking-tighter sm:text-6xl lg:text-7xl',
              mainShardGradation,
            )}
          >
            {t('common.HomeHeroRow.title1')} <br />
            {t('common.HomeHeroRow.title2')} <br />
            {t('common.HomeHeroRow.title3')}
          </h1>
          <p
            className={cn(
              '-mt-4 max-w-96 sm:max-w-lg sm:text-lg lg:-mt-2 lg:max-w-xl lg:text-xl',
              'text-center text-sm font-medium tracking-tight',
              blightTextColor,
            )}
          >
            {t('common.HomeHeroRow.subtitle1')} <br />
            {t('common.HomeHeroRow.subtitle2')}
          </p>
          <div className='flex flex-wrap items-center justify-center gap-3'>
            <a href={appInfo.loginUrl}>
              <Button>{t('common.aiChat')}</Button>
            </a>
            <a
              href={`https://github.com/${appInfo.githubRepo}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button variant='outline'>
                <Github className='mr-2 h-5 w-5' />
                {t('common.githubRepo')}
              </Button>
            </a>
          </div>
          <div className='flex flex-wrap items-center justify-center gap-4 md:gap-6'>
            {logos.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className='hover:opacity-80'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  lightSrc={item.logo}
                  darkSrc={item.logoInvert}
                  alt={item.title}
                  className='w-20 lg:w-24'
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

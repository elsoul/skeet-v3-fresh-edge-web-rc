import Button from '@/components/ui/Button.tsx'
import { appInfo } from '@/config.ts'
import { asset } from 'fresh/runtime'
import {
  lightTextColor,
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

const logos = [
  {
    title: 'CloudFlare',
    logo: asset('/img/logo/partners/CloudFlareLogoHorizontal.svg'),
    logoInvert: asset('/img/logo/partners/CloudFlareLogoInvertHorizontal.svg'),
    href: CLOUDFLARE_LINK,
  },
  {
    title: 'Deno',
    logo: asset('/img/logo/partners/DenoLogoHorizontal.svg'),
    logoInvert: asset('/img/logo/partners/DenoLogoInvertHorizontal.svg'),
    href: DENO_LINK,
  },
  {
    title: 'Neon',
    logo: asset('/img/logo/partners/NeonLogoHorizontal.svg'),
    logoInvert: asset('/img/logo/partners/NeonLogoInvertHorizontal.svg'),
    href: NEON_LINK,
  },
  {
    title: 'Prisma',
    logo: asset('/img/logo/partners/PrismaLogoHorizontal.svg'),
    logoInvert: asset('/img/logo/partners/PrismaLogoInvertHorizontal.svg'),
    href: PRISMA_LINK,
  },
  {
    title: 'Solana',
    logo: asset('/img/logo/partners/SolanaLogoHorizontal.svg'),
    logoInvert: asset('/img/logo/partners/SolanaLogoInvertHorizontal.svg'),
    href: SOLANA_COM_LINK,
  },
  {
    title: 'Fresh',
    logo: asset('/img/logo/partners/FreshLogoHorizontal.svg'),
    logoInvert: asset('/img/logo/partners/FreshLogoInvertHorizontal.svg'),
    href: FRESH_LINK,
  },
  {
    title: 'Expo',
    logo: asset('/img/logo/partners/ExpoLogoHorizontal.svg'),
    logoInvert: asset('/img/logo/partners/ExpoLogoInvertHorizontal.svg'),
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
            src={asset('/img/icon/opos/CompressedCoil.png')}
            alt='Background'
            className='h-56 w-56 sm:h-64 sm:w-64 md:h-96 md:w-96 lg:h-[512px] lg:w-[512px]'
          />
        </div>

        <div className='absolute bottom-0 right-0 opacity-20 dark:opacity-40'>
          <img
            src={asset('/img/icon/opos/SagaPhone.png')}
            alt='Background'
            className='h-56 w-56 sm:h-64 sm:w-64 md:h-96 md:w-96 lg:h-[512px] lg:w-[512px]'
          />
        </div>

        <div className='relative mx-auto flex z-10 max-w-3xl flex-col items-center gap-6 py-24 md:py-40 lg:max-w-4xl'>
          <h1
            className={cn(
              'py-2 text-center text-4xl font-bold tracking-tighter sm:text-7xl lg:text-7xl',
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
              lightTextColor,
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

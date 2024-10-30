import { appInfo } from '@/config.ts'
import LogoHorizontalLink from '@/components/common/LogoHorizontalLink.tsx'
import {
  DiscordIconLink,
  GithubIconLink,
  TwitterIconLink,
  YouTubeIconLink,
} from '@/components/common/icons.tsx'
import { LanguageToggle } from '@/components/config/LanguageToggle.tsx'
import { ModeToggle } from '@/components/config/ModeToggle.tsx'
import { defaultFooterNav } from './defaultNavs.ts'
import { cn } from '@/lib/utils.ts'
import GreenHostingBadge from '@/components/common/GreenHostingBadge.tsx'
import {
  lightTextColor,
  linkActiveColor,
  linkBaseColor,
} from '@/components/utils/tailwinds.ts'
import { useTranslation } from '@/hooks/i18n/useTranslation.ts'
import Link from '@/components/utils/Link.tsx'
import { usePathname } from '@/hooks/i18n/usePathname.ts'

export default function DefaultFooter() {
  const t = useTranslation()
  const { isActivePath } = usePathname()

  return (
    <>
      <footer
        class={cn(
          'mx-auto w-full max-w-7xl px-6 pb-8 pt-10',
          'flex flex-col gap-10',
          'border-t border-zinc-200 dark:border-zinc-500',
        )}
      >
        <div class='flex flex-col items-stretch justify-between gap-8 sm:flex-row'>
          <div class='flex w-full justify-between sm:flex-col'>
            <LogoHorizontalLink className='w-24' />
            <div class='flex flex-row items-center gap-4'>
              <GithubIconLink />
              <TwitterIconLink />
              <DiscordIconLink />
              <YouTubeIconLink />
            </div>
          </div>
          <div class='flex w-full flex-col gap-3'>
            {defaultFooterNav.map((navItem) => (
              <Link
                href={navItem.path}
                key={navItem.label}
                class={cn(
                  isActivePath(navItem.path) ? linkActiveColor : linkBaseColor,
                  'py-2 text-sm',
                  'flex items-center gap-4',
                )}
              >
                {t(navItem.label)}
              </Link>
            ))}
          </div>
          <div class='flex w-full flex-col gap-3'>
            <a
              href={appInfo.loginUrl}
              class={cn(
                'py-2 text-sm',
                linkBaseColor,
                'flex items-center gap-4',
              )}
            >
              {t('common.aiChat')}
            </a>
          </div>
          <div class='flex w-full flex-col gap-3'>
            <div class='max-w-40 sm:ml-auto'>
              <GreenHostingBadge />
            </div>
          </div>
        </div>
        <div class='flex w-full flex-row items-center justify-center'>
          <p class={cn('text-sm tracking-tight', lightTextColor)}>
            © {new Date().getFullYear()} {appInfo.copyright}
          </p>
          <div class='flex flex-grow' />
          <div class='flex flex-row items-start justify-center gap-3'>
            <LanguageToggle />
            <ModeToggle />
          </div>
        </div>
      </footer>
    </>
  )
}

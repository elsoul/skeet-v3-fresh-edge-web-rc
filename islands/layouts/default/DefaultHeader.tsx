import LogoHorizontalLink from '@/components/common/LogoHorizontalLink.tsx'
import { appInfo } from '@/config.ts'
import DefaultModalNav from './DefaultModalNav.tsx'
import { defaultHeaderNav } from './defaultNavs.ts'
import { cn } from '@/lib/utils.ts'
import { useShowHeader } from '@/hooks/utils/useShowHeader.ts'
import { GithubIconLink } from '@/components/common/icons.tsx'
import { linkActiveColor, linkBaseColor } from '@/components/utils/tailwinds.ts'
import { useTranslation } from '@/hooks/i18n/useTranslation.ts'
import { usePathname } from '@/hooks/i18n/usePathname.ts'
import Button from '@/components/ui/Button.tsx'
import Link from '@/components/utils/Link.tsx'

export default function DefaultHeader() {
  const showHeader = useShowHeader()
  const t = useTranslation()
  const { isActivePath } = usePathname()

  return (
    <>
      <header
        class={cn(
          'sticky top-0 z-20',
          'w-full px-6 py-4',
          'backdrop-blur-xl bg-opacity-70 dark:bg-opacity-20',
          'flex flex-col gap-10',
          'transition-transform duration-300 ease-in-out',
          showHeader.value ? 'translate-y-0' : '-translate-y-full',
        )}
      >
        <div
          class={cn(
            'mx-auto w-full max-w-7xl',
            'flex flex-row items-center gap-2 md:gap-20',
          )}
        >
          <LogoHorizontalLink className='w-20 sm:w-24' />
          <div class='hidden gap-8 md:flex md:flex-row'>
            {defaultHeaderNav.map((navItem) => (
              <Link
                href={navItem.path}
                key={navItem.label}
                class={cn(
                  isActivePath(navItem.path) ? linkActiveColor : linkBaseColor,
                  'flex items-center gap-4',
                  'text-sm',
                )}
              >
                {t(navItem.label)}
              </Link>
            ))}
          </div>
          <div class='flex flex-grow' />
          <div class='flex flex-row items-center justify-center gap-3'>
            <DefaultModalNav />
            <div class='hidden items-center gap-4 md:flex md:flex-row'>
              <a href={appInfo.loginUrl}>
                <Button variant='outline'>
                  {t('common.aiChat')}
                </Button>
              </a>
              <GithubIconLink />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

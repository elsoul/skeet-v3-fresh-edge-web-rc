import { appInfo } from '@/config.ts'
import LogoHorizontalLink from '@/components/common/LogoHorizontalLink.tsx'
import { cn } from '@/lib/utils.ts'
import { useSignal } from '@preact/signals'
import {
  DiscordIconLink,
  GithubIconLink,
  TwitterIconLink,
  YouTubeIconLink,
} from '@/components/common/icons.tsx'
import { defaultHeaderNav } from './defaultNavs.ts'
import { Modal } from '@/components/ui/Modal.tsx'
import { Menu } from 'iconoir-react'
import {
  basicTextColor,
  linkActiveColor,
  linkBaseColor,
} from '@/components/utils/tailwinds.ts'
import { usePathname } from '@/hooks/i18n/usePathname.ts'
import Link from '@/components/utils/Link.tsx'
import { useTranslation } from '@/hooks/i18n/useTranslation.ts'
import Button from '@/components/ui/Button.tsx'

export default function DefaultModalNav() {
  const t = useTranslation()
  const isOpen = useSignal(false)
  const { isActivePath } = usePathname()

  return (
    <>
      <button
        onClick={() => isOpen.value = true}
        class='md:hidden hover:opacity-70'
      >
        <Menu class={basicTextColor} />
      </button>
      <Modal
        isOpen={isOpen.value}
        onClose={() => isOpen.value = false}
        position='fullscreen'
        className='flex flex-col'
      >
        <nav className='grid gap-2 text-lg font-medium'>
          <div className='mb-6 flex flex-row items-start'>
            <LogoHorizontalLink
              className='w-24'
              onClick={() => {
                isOpen.value = false
              }}
            />
          </div>
          {defaultHeaderNav.map((navItem) => (
            <Link
              href={navItem.path}
              key={navItem.label}
              class={cn(
                isActivePath(navItem.path) ? linkActiveColor : linkBaseColor,
                'mx-[-0.65rem] flex items-center gap-4 px-3 py-2 text-sm hover:opacity-70',
              )}
              onClick={() => isOpen.value = false}
            >
              {t(navItem.label)}
            </Link>
          ))}
          <div className='mt-8'>
            <a href={appInfo.loginUrl}>
              <Button variant='outline'>{t('common.aiChat')}</Button>
            </a>
          </div>
        </nav>
        <div className='mt-auto'>
          <div className='flex flex-row gap-3'>
            <GithubIconLink />
            <TwitterIconLink />
            <DiscordIconLink />
            <YouTubeIconLink />
          </div>
        </div>
      </Modal>
    </>
  )
}

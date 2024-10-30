import { MoonSat, SunLight } from 'iconoir-react'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@/components/ui/Dropdown.tsx'
import { cn } from '@/lib/utils.ts'
import { basicTextColor } from '@/components/utils/tailwinds.ts'
import { useTranslation } from '@/hooks/i18n/useTranslation.ts'
import { useTheme } from 'fresh-theme'
import Button from '@/components/ui/Button.tsx'

export function ModeToggle() {
  const t = useTranslation()
  const { theme, setTheme } = useTheme()

  return (
    <>
      <Menu>
        <MenuButton>
          <Button variant='outline' buttonType='icon'>
            {theme === 'light'
              ? <SunLight class={cn('h-5 w-5', basicTextColor)} />
              : <MoonSat class={cn('h-5 w-5', basicTextColor)} />}
          </Button>
        </MenuButton>
        <MenuItems position='top-left'>
          <MenuItem
            onClick={() => setTheme('light')}
          >
            {t('common.lightMode')}
          </MenuItem>
          <MenuItem
            onClick={() => setTheme('dark')}
          >
            {t('common.darkMode')}
          </MenuItem>
        </MenuItems>
      </Menu>
    </>
  )
}

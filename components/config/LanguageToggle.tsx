import { useLocale } from '@/hooks/i18n/useLocale.ts'
import { Language } from 'iconoir-react'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@/components/ui/Dropdown.tsx'
import { cn } from '@/lib/utils.ts'
import { basicTextColor } from '@/components/utils/tailwinds.ts'
import Button from '@/components/ui/Button.tsx'

export function LanguageToggle() {
  const { setLocale } = useLocale()

  return (
    <>
      <Menu>
        <MenuButton>
          <Button variant='outline' buttonType='icon'>
            <Language class={cn('h-5 w-5', basicTextColor)} />
          </Button>
        </MenuButton>
        <MenuItems position='top-left'>
          <MenuItem
            onClick={() => setLocale('en')}
          >
            English
          </MenuItem>
          <MenuItem
            onClick={() => setLocale('ja')}
          >
            日本語
          </MenuItem>
        </MenuItems>
      </Menu>
    </>
  )
}

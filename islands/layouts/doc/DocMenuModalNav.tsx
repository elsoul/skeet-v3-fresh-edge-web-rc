import { useSignal } from '@preact/signals'
import { Modal } from '@/components/ui/Modal.tsx'
import { List } from 'iconoir-react'
import { basicTextColor } from '@/components/utils/tailwinds.ts'
import Button from '@/components/ui/Button.tsx'
import { useTranslation } from '@/hooks/i18n/useTranslation.ts'
import { cn } from '@/lib/utils.ts'
import LogoHorizontalLink from '@/components/common/LogoHorizontalLink.tsx'
import DocMenu from '@/islands/layouts/doc/DocMenu.tsx'

export default function DocMenuModalNav() {
  const isOpen = useSignal(false)
  const t = useTranslation()

  return (
    <>
      <Button
        variant='outline'
        buttonType='small'
        onClick={() => isOpen.value = true}
        class='lg:hidden hover:opacity-70 flex gap-2'
      >
        <List class={cn('w-4 h-4', basicTextColor)} />
        <span className='text-xs'>{t('doc.nav.title')}</span>
      </Button>
      <Modal
        isOpen={isOpen.value}
        onClose={() => isOpen.value = false}
        position='fullscreen'
        className='flex flex-col'
      >
        <nav className='grid gap-2'>
          <div className='mb-6 flex flex-row items-start'>
            <LogoHorizontalLink
              className='w-20'
              onClick={() => {
                isOpen.value = false
              }}
            />
          </div>
          <DocMenu />
        </nav>
      </Modal>
    </>
  )
}

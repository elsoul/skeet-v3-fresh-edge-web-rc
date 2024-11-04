import { useSignal } from '@preact/signals'
import { Modal } from '@/components/ui/Modal.tsx'
import { NavArrowDown } from 'iconoir-react'
import { basicTextColor } from '@/components/utils/tailwinds.ts'
import { MarkdownHeading } from '@/utils/markdown.ts'
import Toc from '@/islands/posts/Toc.tsx'
import Button from '@/components/ui/Button.tsx'
import { useTranslation } from '@/hooks/i18n/useTranslation.ts'
import { cn } from '@/lib/utils.ts'
import LogoHorizontalLink from '@/components/common/LogoHorizontalLink.tsx'

type Props = {
  headings: MarkdownHeading[]
}

export default function TocMenuModalNav({ headings }: Props) {
  const isOpen = useSignal(false)
  const t = useTranslation()

  return (
    <>
      <Button
        variant='outline'
        buttonType='small'
        onClick={() => isOpen.value = true}
        class='md:hidden hover:opacity-70 flex gap-2'
      >
        <span className='text-xs'>{t('common.toc')}</span>
        <NavArrowDown class={cn('w-4 h-4', basicTextColor)} />
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
          <Toc headings={headings} />
        </nav>
      </Modal>
    </>
  )
}

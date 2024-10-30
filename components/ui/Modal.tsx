import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils.ts'
import { XmarkCircle } from 'iconoir-react'
import { basicBgColor } from '@/components/utils/tailwinds.ts'

const ModalOverlay = (
  { isOpen, onClose }: { isOpen: boolean; onClose: () => void },
) => (
  isOpen
    ? (
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/60 h-screen',
          'transition-opacity',
          isOpen ? 'opacity-100' : 'opacity-0',
        )}
        onClick={onClose}
      />
    )
    : null
)

const modalVariants = cva(
  `fixed z-50 p-6 shadow-lg transition-all ease-in-out ${basicBgColor}`,
  {
    variants: {
      position: {
        top: 'top-0 inset-x-0 w-full',
        bottom: 'bottom-0 inset-x-0 w-full',
        left: 'left-0 inset-y-0 w-3/4 max-w-sm h-screen',
        right: 'right-0 inset-y-0 w-3/4 max-w-sm h-screen',
        fullscreen: 'inset-0 w-full h-screen',
      },
    },
    defaultVariants: {
      position: 'right',
    },
  },
)

interface ModalContentProps extends VariantProps<typeof modalVariants> {
  isOpen: boolean
  children: preact.ComponentChildren
  onClose: () => void
  className?: string
}

const ModalContent = (
  { position = 'right', isOpen, onClose, children, className }:
    ModalContentProps,
) => (
  isOpen
    ? (
      <div
        class={cn(
          modalVariants({ position }),
          'transition-transform',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          className,
        )}
      >
        {children}
        <button
          onClick={onClose}
          className={cn(
            'absolute top-4 right-4 p-3',
            'text-zinc-700 dark:text-zinc-100 hover:opacity-70',
          )}
          aria-label='Close'
        >
          <XmarkCircle />
        </button>
      </div>
    )
    : null
)

export const Modal = ({
  isOpen,
  onClose,
  position,
  children,
  className,
}: ModalContentProps) => (
  <>
    <ModalOverlay isOpen={isOpen} onClose={onClose} />
    <ModalContent
      isOpen={isOpen}
      onClose={onClose}
      position={position}
      className={className}
    >
      {children}
    </ModalContent>
  </>
)

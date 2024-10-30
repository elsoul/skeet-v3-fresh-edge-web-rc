import { createContext } from 'preact'
import { useContext, useEffect, useRef, useState } from 'preact/hooks'
import { JSX } from 'preact/jsx-runtime'
import { cn } from '@/lib/utils.ts'
import {
  basicBgColor,
  basicBorderColor,
  basicHoverBgColor,
  basicTextColor,
} from '@/components/utils/tailwinds.ts'

interface MenuContextProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  menuRef: preact.RefObject<HTMLDivElement>
}

const MenuContext = createContext<MenuContextProps | null>(null)

interface MenuProps {
  children: preact.ComponentChildren
}

const Menu = ({ children }: MenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        event.target instanceof Node &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (isOpen && event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen, menuRef }}>
      <div class='relative inline-block text-left'>{children}</div>
    </MenuContext.Provider>
  )
}

interface MenuButtonProps {
  children: preact.ComponentChildren
}

const MenuButton = ({ children }: MenuButtonProps) => {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('MenuButton must be used within a Menu')
  }
  const { isOpen, setIsOpen } = context

  return (
    <div
      aria-haspopup='true'
      aria-expanded={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      {children}
    </div>
  )
}

interface MenuItemsProps {
  children: preact.ComponentChildren
  className?: string
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

const MenuItems = ({
  children,
  className = '',
  position = 'bottom-left',
}: MenuItemsProps) => {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('MenuItems must be used within a Menu')
  }
  const { isOpen, menuRef } = context

  if (!isOpen) {
    return null
  }

  let positionClasses = ''
  let originClasses = ''

  switch (position) {
    case 'top-left':
      positionClasses = 'bottom-full right-0 mb-3'
      originClasses = 'origin-bottom-right'
      break
    case 'top-right':
      positionClasses = 'bottom-full left-0 mb-3'
      originClasses = 'origin-bottom-left'
      break
    case 'bottom-left':
      positionClasses = 'top-full right-0 mt-3'
      originClasses = 'origin-top-right'
      break
    case 'bottom-right':
      positionClasses = 'top-full left-0 mt-3'
      originClasses = 'origin-top-left'
      break
    default:
      positionClasses = 'top-full left-0 mt-3'
      originClasses = 'origin-top-left'
      break
  }

  return (
    <div
      ref={menuRef}
      class={cn(
        'animate-in zoom-in-50',
        'absolute z-10 shadow-xl',
        positionClasses,
        originClasses,
        'p-2 min-w-32 rounded-xl border',
        'text-sm',
        basicBorderColor,
        basicBgColor,
        basicTextColor,
        className,
      )}
      role='menu'
      aria-orientation='vertical'
      tabIndex={-1}
    >
      <div>{children}</div>
    </div>
  )
}

interface MenuItemProps {
  children: preact.ComponentChildren
  href?: string
  onClick?: JSX.MouseEventHandler<HTMLButtonElement>
}

const MenuItem = ({ children, onClick }: MenuItemProps) => {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('MenuItem must be used within a Menu')
  }
  const { setIsOpen } = context

  const handleClick: JSX.MouseEventHandler<HTMLButtonElement> = (event) => {
    setIsOpen(false)
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <button
      class={cn('w-full py-2 px-3 my-1 rounded-xl', basicHoverBgColor)}
      role='menuitem'
      tabIndex={-1}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export { Menu, MenuButton, MenuItem, MenuItems }

import { useSignal } from '@preact/signals'
import { usePathname } from '@/hooks/i18n/usePathname.ts'
import { docMenuData } from '@/islands/layouts/doc/docNavs.ts'
import { Item, Section } from '@/utils/posts.ts'
import { useTranslation } from '@/hooks/i18n/useTranslation.ts'
import Link from '@/components/utils/Link.tsx'
import { cn } from '@/lib/utils.ts'
import { NavArrowDown, NavArrowRight } from 'iconoir-react'
import {
  basicTextColor,
  lightBorderColor,
  linkActiveColor,
  linkMenuColor,
} from '@/components/utils/tailwinds.ts'
import { useEffect } from 'preact/hooks'

const DocMenu = () => {
  return (
    <div className='w-full p-3'>
      {docMenuData.map((section) => (
        <DocMenuSection key={section.title} section={section} />
      ))}
    </div>
  )
}

type DocMenuSectionProps = {
  section: Section
}

const DocMenuSection = ({ section }: DocMenuSectionProps) => {
  const t = useTranslation()
  const { isActivePath } = usePathname()

  return (
    <div className='w-full p-2'>
      <div
        className={cn(
          'flex items-center justify-between',
          'cursor-pointer hover:opacity-70',
        )}
      >
        <Link href={section.path} className='w-full'>
          <span
            className={cn(
              isActivePath(section.path) ? linkActiveColor : basicTextColor,
              'flex-1 text-sm font-bold',
            )}
          >
            {t(section.title)}
          </span>
        </Link>
      </div>
      {section.items && (
        <ul className='my-2 w-full'>
          {section.items.map((item) => (
            <DocMenuItem key={item.title} item={item} />
          ))}
        </ul>
      )}
    </div>
  )
}

type DocMenuItemProps = {
  item: Item
}

const DocMenuItem = ({ item }: DocMenuItemProps) => {
  const t = useTranslation()
  const { isActivePath } = usePathname()
  const isOpen = useSignal(false)

  useEffect(() => {
    const hasActiveSubItem = item.subItems?.some((subItem) =>
      isActivePath(subItem.path)
    ) || false
    isOpen.value = isActivePath(item.path as string) || hasActiveSubItem
  }, [item, isActivePath])

  return (
    <li className='mt-4 w-full'>
      <div
        className={cn(
          'w-full flex items-center justify-between gap-2 py-0.5',
          'cursor-pointer hover:opacity-70',
        )}
        onClick={() => isOpen.value = !item.subItems ? false : !isOpen.value}
      >
        {item.subItems
          ? (
            <div class='flex flex-row justify-between items-center w-full'>
              <p
                className={cn(
                  isActivePath(item.path as string)
                    ? linkActiveColor
                    : linkMenuColor,
                  'text-sm',
                )}
              >
                {t(item.title)}
              </p>
              <p
                className={cn(
                  isActivePath(item.path as string)
                    ? linkActiveColor
                    : linkMenuColor,
                  'text-sm',
                )}
              >
                {isOpen.value
                  ? <NavArrowDown className='h-4 w-4' />
                  : <NavArrowRight className='h-4 w-4' />}
              </p>
            </div>
          )
          : (
            <>
              <Link href={item.path as string} className='w-full'>
                <span
                  className={cn(
                    isActivePath(item.path as string)
                      ? linkActiveColor
                      : linkMenuColor,
                    'flex-1 text-sm',
                  )}
                >
                  {t(item.title)}
                </span>
              </Link>
            </>
          )}
      </div>
      {isOpen.value && item.subItems && (
        <ul
          className={cn('my-2 ml-1 w-full pl-4', 'border-l', lightBorderColor)}
        >
          {item.subItems.map((subItem) => (
            <li key={subItem.title} className='mb-1 w-full'>
              <Link href={subItem.path} className='w-full'>
                <p
                  className={cn(
                    isActivePath(subItem.path)
                      ? linkActiveColor
                      : linkMenuColor,
                    'w-full py-2 text-sm hover:opacity-70',
                  )}
                >
                  {t(subItem.title)}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default DocMenu

import { useLocale } from '@/hooks/i18n/useLocale.ts'
import { JSX } from 'preact'

interface LinkProps extends JSX.HTMLAttributes<HTMLAnchorElement> {
  href: string
  children: preact.ComponentChildren
}

export default function Link({ href, children, ...props }: LinkProps) {
  const { locale } = useLocale()

  const localizedHref = `/${locale}${href}`

  return (
    <a href={localizedHref} {...props}>
      {children}
    </a>
  )
}

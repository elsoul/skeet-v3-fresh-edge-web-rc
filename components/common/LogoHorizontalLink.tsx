import { cn } from '@/lib/utils.ts'
import { asset } from 'fresh/runtime'
import { useTranslation } from '@/hooks/i18n/useTranslation.ts'
import Link from '@/components/utils/Link.tsx'
import {
  SKEET_LOGO_HORIZONTAL,
  SKEET_LOGO_INVERT_HORIZONTAL,
} from '@/components/utils/img.ts'

type Props = {
  className?: string
  href?: string
  onClick?: () => void
}

export default function LogoHorizontalLink({
  className,
  href = '/',
  ...rest
}: Props) {
  const t = useTranslation()
  return (
    <>
      <Link href={href} {...rest} aria-label={t('metadata.appTitle')}>
        <img
          src={asset(SKEET_LOGO_HORIZONTAL)}
          alt={t('metadata.appTitle')}
          class={cn('hover:opacity-70 dark:hidden', className)}
        />
        <img
          src={asset(SKEET_LOGO_INVERT_HORIZONTAL)}
          alt={t('metadata.appTitle')}
          class={cn('hidden hover:opacity-70 dark:block', className)}
        />
      </Link>
    </>
  )
}

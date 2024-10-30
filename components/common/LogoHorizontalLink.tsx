import { cn } from '@/lib/utils.ts'
import { asset } from 'fresh/runtime'
import { useTranslation } from '@/hooks/i18n/useTranslation.ts'

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
      <a href={href} {...rest} aria-label={t('metadata.appTitle')}>
        <img
          src={asset('/img/logo/SkeetLogoHorizontal.svg')}
          alt={t('metadata.appTitle')}
          class={cn('hover:opacity-70 dark:hidden', className)}
        />
        <img
          src={asset('/img/logo/SkeetLogoInvertHorizontal.svg')}
          alt={t('metadata.appTitle')}
          class={cn('hidden hover:opacity-70 dark:block', className)}
        />
      </a>
    </>
  )
}

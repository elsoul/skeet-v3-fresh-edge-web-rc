import { useTheme } from 'fresh-theme'
import { JSX } from 'preact'

interface ImageProps extends JSX.HTMLAttributes<HTMLImageElement> {
  lightSrc: string
  darkSrc: string
}

export default function Image({ lightSrc, darkSrc, ...props }: ImageProps) {
  const { theme } = useTheme()
  return <img src={theme === 'light' ? lightSrc : darkSrc} {...props} />
}

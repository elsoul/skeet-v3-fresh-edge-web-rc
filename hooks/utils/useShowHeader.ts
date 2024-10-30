import { useEffect } from 'preact/hooks'
import { useSignal } from '@preact/signals'

type Props = {
  defaultShowHeader?: boolean
}

export function useShowHeader({ defaultShowHeader = true }: Props = {}) {
  const showHeader = useSignal(defaultShowHeader)
  const lastScrollY = useSignal(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = globalThis.scrollY

      if (currentScrollY < 80 || currentScrollY < lastScrollY.value) {
        showHeader.value = true
      } else {
        showHeader.value = false
      }

      lastScrollY.value = currentScrollY
    }

    globalThis.addEventListener('scroll', handleScroll)

    return () => {
      globalThis.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return showHeader
}

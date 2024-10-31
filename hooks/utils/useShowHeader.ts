import { useEffect } from 'preact/hooks'
import { useSignal } from '@preact/signals'
import throttle from 'lodash.throttle'

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
    const throttledHandleScroll = throttle(handleScroll, 100) as (
      this: Window,
      ev: Event,
    ) => void

    globalThis.addEventListener('scroll', throttledHandleScroll)

    return () => {
      globalThis.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [])

  return showHeader
}

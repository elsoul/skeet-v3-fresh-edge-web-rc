import { useEffect, useState } from 'preact/hooks'
import throttle from 'lodash.throttle'
import { MarkdownHeading } from '@/utils/markdown.ts'

export function useActiveHeading(headings: MarkdownHeading[]): string {
  const [isActive, setIsActive] = useState<string>('')

  useEffect(() => {
    const updateActiveId: ReturnType<typeof throttle> = throttle(
      (_event: Event) => {
        let currentId = ''

        headings.forEach(({ id }) => {
          const element = globalThis.document.getElementById(id)
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= 80) {
              currentId = id
            }
          }
        })

        setIsActive(currentId)
      },
      100,
    )

    globalThis.addEventListener('scroll', updateActiveId as EventListener)

    return () => {
      globalThis.removeEventListener('scroll', updateActiveId as EventListener)
    }
  }, [headings])

  return isActive
}

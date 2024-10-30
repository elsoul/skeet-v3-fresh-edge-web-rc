import { useAtom } from 'fresh-atom'
import { stateAtom } from '@/islands/layouts/StateShareLayer.tsx'

export function useTranslation() {
  const [state] = useAtom(stateAtom)

  /**
   * Translates a key string like 'common.title' or 'common.titlerow.title.example'
   * by traversing the nested structure of `state.t`.
   *
   * @param key - The translation key in dot notation (e.g., 'common.title').
   * @returns The translated string, or an empty string if the key is not found.
   */
  const t = (key: string): string => {
    const keys = key.split('.')
    let result: Record<string, unknown> | string = state.translationData

    for (const k of keys) {
      if (typeof result === 'object' && result !== null && k in result) {
        result = result[k] as Record<string, unknown> | string
      } else {
        return '' // Key not found, return empty string or default text
      }
    }

    return typeof result === 'string' ? result : '' // Return the result if it's a string
  }

  return t
}

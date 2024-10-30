import { useAtom } from 'fresh-atom'
import { stateAtom } from '@/islands/layouts/StateShareLayer.tsx'

export function useLocale() {
  const [state, setState] = useAtom(stateAtom)

  /**
   * Sets a new locale, updates the global state, and redirects
   * to the new locale's URL path to update page content.
   *
   * @param locale - The new locale string (e.g., 'en', 'ja').
   */
  const setLocale = (locale: string) => {
    setState((prevState) => ({ ...prevState, locale }))

    const newPath = `/${locale}${state.path}`
    globalThis.location.href = newPath
  }

  return { locale: state.locale, setLocale }
}

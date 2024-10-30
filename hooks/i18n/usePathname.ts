import { useAtom } from 'fresh-atom'
import { stateAtom } from '@/islands/layouts/StateShareLayer.tsx'
import { useCallback } from 'preact/hooks'

export function usePathname() {
  const [state] = useAtom(stateAtom)
  const isActivePath = useCallback((path: string) => {
    return state.path === path
  }, [state.path])
  return { pathname: state.path, isActivePath }
}

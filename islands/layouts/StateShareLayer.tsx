import { type ExtendedState } from '@/utils/state.ts'
import { atom, useAtom } from 'fresh-atom'
import { useEffect } from 'preact/hooks'

type Props = {
  state: ExtendedState
}

export const stateAtom = atom<ExtendedState>({
  title: '',
  description: '',
  ogImage: '',
  noIndex: false,
  locale: 'en',
  translationData: {},
  path: '/',
})

export default function StateShareLayer({ state }: Props) {
  const [, setState] = useAtom(stateAtom)

  useEffect(() => {
    setState(state)
  }, [state])

  return null
}

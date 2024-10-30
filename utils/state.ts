import { createDefine } from 'fresh'
import type { TranslationState } from 'fresh-i18n'

interface State {
  title?: string
  description?: string
  ogImage?: string
  noIndex?: boolean
}

export type ExtendedState = State & TranslationState

export const define = createDefine<ExtendedState>()

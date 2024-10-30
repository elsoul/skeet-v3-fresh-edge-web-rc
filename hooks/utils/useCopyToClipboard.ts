import { useSignal } from '@preact/signals'

export interface useCopyToClipboardProps {
  timeout?: number
}

export function useCopyToClipboard({
  timeout = 2000,
}: useCopyToClipboardProps) {
  const isCopied = useSignal(false)

  const copyToClipboard = (value: string) => {
    if (
      typeof globalThis === 'undefined' ||
      !globalThis.navigator?.clipboard?.writeText
    ) {
      return
    }

    if (!value) {
      return
    }

    void globalThis.navigator.clipboard.writeText(value).then(() => {
      isCopied.value = true

      setTimeout(() => {
        isCopied.value = false
      }, timeout)
    })
  }

  return { isCopied, copyToClipboard }
}

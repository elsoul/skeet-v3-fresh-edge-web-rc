import type { PageProps } from 'fresh'
import StateShareLayer from '@/islands/layouts/StateShareLayer.tsx'
import type { ExtendedState } from '@/utils/state.ts'

export default function RootLayout(
  { Component, state }: PageProps,
) {
  return (
    <>
      <StateShareLayer state={state as ExtendedState} />
      <Component />
    </>
  )
}

import { createFileRoute } from '@tanstack/react-router'
import { Cores } from '../screens/cores'

export const Route = createFileRoute('/cores')({
  component: Cores,
  head: () => ({
    meta: [{ title: 'Cores · Xgreen Design System' }],
  }),
})

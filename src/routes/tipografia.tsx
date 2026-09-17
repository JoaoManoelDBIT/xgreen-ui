import { createFileRoute } from '@tanstack/react-router'
import { Tipografia } from '../screens/tipografia'

export const Route = createFileRoute('/tipografia')({
  component: Tipografia,
  head: () => ({
    meta: [{ title: 'Tipografia · Xgreen Design System' }],
  }),
})

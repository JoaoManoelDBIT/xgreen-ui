import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/componentes/')({
  beforeLoad: () => {
    throw redirect({ to: '/componentes/botao' })
  },
})

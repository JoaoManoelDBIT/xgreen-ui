import { createFileRoute } from '@tanstack/react-router'
import { Botao } from '../../screens/componentes/botao'

export const Route = createFileRoute('/componentes/botao')({
  component: Botao,
  head: () => ({
    meta: [{ title: 'Botão · Xgreen Design System' }],
  }),
})

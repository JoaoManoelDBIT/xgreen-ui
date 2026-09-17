import { Button } from '../../components'
import type { ButtonProps } from '../../components'
import { button } from '../../tokens'
import { CodeSnippet } from '../layout/code-snippet'

const stateMeta = [
  {
    id: 'default',
    label: 'Default',
    description: 'Estado inicial. Renderize o botão sem props extras de estado.',
    preview: 'default' as const,
  },
  {
    id: 'hover',
    label: 'Hover',
    description: 'Não precisa de prop. O hover entra sozinho quando o mouse passa.',
    preview: 'hover' as const,
  },
  {
    id: 'focus',
    label: 'Focus',
    description: 'Não precisa de prop. O anel aparece com Tab ou ao focar o botão.',
    preview: 'focus' as const,
  },
  {
    id: 'disabled',
    label: 'Disabled',
    description: 'Passe disabled quando a ação ainda não pode ser executada.',
    preview: 'disabled' as const,
  },
] as const

function usageSnippet(
  variant: NonNullable<ButtonProps['variant']>,
  state: (typeof stateMeta)[number]['id'],
) {
  const variantProp = variant === 'primary' ? '' : ` variant="${variant}"`
  const disabledProp = state === 'disabled' ? ' disabled' : ''
  return `<Button${variantProp}${disabledProp}>
    Continuar
</Button>`
}

function ButtonStateGrid({
  variant,
  tokens,
}: {
  variant: NonNullable<ButtonProps['variant']>
  tokens: (typeof button)[typeof variant]
}) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 2xl:grid-cols-4">
      {stateMeta.map((state) => {
        const token = tokens[state.id]
        const text = 'text' in token ? token.text : undefined

        return (
          <article key={`${variant}-${state.id}`} className="overflow-hidden rounded-xl border border-xg-neutral-200 bg-xg-white">
            <div className="flex h-36 items-center justify-center bg-xg-neutral-100/70 p-5">
              {state.preview === 'disabled' ? (
                <Button variant={variant} disabled className="w-[130px]">Continuar</Button>
              ) : (
                <Button
                  variant={variant}
                  data-status={state.preview === 'default' ? undefined : state.preview}
                  tabIndex={-1}
                  className="pointer-events-none w-[130px]"
                >
                  Continuar
                </Button>
              )}
            </div>
            <div className="p-5">
              <h4 className="xg-body-md-semibold">{state.label}</h4>
              <p className="xg-body-sm mt-1 text-xg-neutral-600">{state.description}</p>
              <CodeSnippet className="mt-4" code={usageSnippet(variant, state.id)} />
              <dl className="xg-caption mt-4 space-y-1 text-xg-neutral-500">
                <div className="flex justify-between gap-3">
                  <dt>Background</dt>
                  <dd className="text-xg-neutral-800">{token.background}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt>Border</dt>
                  <dd className="text-xg-neutral-800">{token.border}</dd>
                </div>
                {text ? (
                  <div className="flex justify-between gap-3">
                    <dt>Texto</dt>
                    <dd className="text-xg-neutral-800">{text}</dd>
                  </div>
                ) : null}
              </dl>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export function Botao() {
  return (
    <>
      <div id="botao" className="mb-10 scroll-mt-32">
        <h1 className="xg-heading-h3 sm:xg-heading-h1">Botão</h1>
      </div>

      <section id="botao-propriedades" aria-labelledby="botao-propriedades-titulo" className="scroll-mt-32">
        <div className="overflow-hidden rounded-xl border border-xg-neutral-200 bg-xg-white">
          <h2 id="botao-propriedades-titulo" className="xg-body-sm-semibold border-b border-xg-neutral-200 bg-xg-neutral-100/70 px-6 py-4">Propriedades</h2>
          <dl className="divide-y divide-xg-neutral-100">
            <div className="grid gap-2 px-6 py-5 sm:grid-cols-[160px_minmax(0,1fr)]">
              <dt className="xg-body-sm-semibold"><code className="font-xg-sans">variant</code></dt>
              <dd className="xg-body-sm text-xg-neutral-600">
                <code className="rounded bg-xg-neutral-100 px-1.5 py-0.5">primary</code>
                {' '}(padrão),{' '}
                <code className="rounded bg-xg-neutral-100 px-1.5 py-0.5">outline</code>
                {' '}ou{' '}
                <code className="rounded bg-xg-neutral-100 px-1.5 py-0.5">transparent</code>
                {' '}ou{' '}
                <code className="rounded bg-xg-neutral-100 px-1.5 py-0.5">error</code>
                {' '}ou{' '}
                <code className="rounded bg-xg-neutral-100 px-1.5 py-0.5">outline-error</code>
                {' '}ou{' '}
                <code className="rounded bg-xg-neutral-100 px-1.5 py-0.5">transparent-error</code>
                {' '}ou{' '}
                <code className="rounded bg-xg-neutral-100 px-1.5 py-0.5">neutral</code>
                {' '}ou{' '}
                <code className="rounded bg-xg-neutral-100 px-1.5 py-0.5">outline-neutral</code>
                {' '}ou{' '}
                <code className="rounded bg-xg-neutral-100 px-1.5 py-0.5">transparent-neutral</code>.
              </dd>
            </div>
            <div className="grid gap-2 px-6 py-5 sm:grid-cols-[160px_minmax(0,1fr)]">
              <dt className="xg-body-sm-semibold"><code className="font-xg-sans">disabled</code></dt>
              <dd className="xg-body-sm text-xg-neutral-600">
                Bloqueia o clique. Fundo
                {' '}{button.primary.disabled.background}, borda
                {' '}{button.primary.disabled.border}.
              </dd>
            </div>
            <div className="grid gap-2 px-6 py-5 sm:grid-cols-[160px_minmax(0,1fr)]">
              <dt className="xg-body-sm-semibold"><code className="font-xg-sans">children</code></dt>
              <dd className="xg-body-sm text-xg-neutral-600">
                Rótulo do botão. Usa a tipografia <code className="rounded bg-xg-neutral-100 px-1.5 py-0.5">xg-body-md-semibold</code>.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="botao-estados" aria-labelledby="botao-estados-titulo" className="mt-12 scroll-mt-32">
        <h2 id="botao-estados-titulo" className="xg-heading-h5">Estados</h2>

        <h3 className="xg-body-md-semibold mt-8">Primary</h3>
        <ButtonStateGrid variant="primary" tokens={button.primary} />

        <h3 className="xg-body-md-semibold mt-10">Outline</h3>
        <ButtonStateGrid variant="outline" tokens={button.outline} />

        <h3 className="xg-body-md-semibold mt-10">Transparent</h3>
        <ButtonStateGrid variant="transparent" tokens={button.transparent} />

        <h3 className="xg-body-md-semibold mt-10">Error</h3>
        <ButtonStateGrid variant="error" tokens={button.error} />

        <h3 className="xg-body-md-semibold mt-10">Outline error</h3>
        <ButtonStateGrid variant="outline-error" tokens={button['outline-error']} />

        <h3 className="xg-body-md-semibold mt-10">Transparent error</h3>
        <ButtonStateGrid variant="transparent-error" tokens={button['transparent-error']} />

        <h3 className="xg-body-md-semibold mt-10">Neutral</h3>
        <ButtonStateGrid variant="neutral" tokens={button.neutral} />

        <h3 className="xg-body-md-semibold mt-10">Outline neutral</h3>
        <ButtonStateGrid variant="outline-neutral" tokens={button['outline-neutral']} />

        <h3 className="xg-body-md-semibold mt-10">Transparent neutral</h3>
        <ButtonStateGrid variant="transparent-neutral" tokens={button['transparent-neutral']} />

        <dl className="mt-6 grid grid-cols-2 overflow-hidden rounded-xl border border-xg-neutral-200 bg-xg-white sm:grid-cols-4">
          {[
            ['Altura', '44px'],
            ['Padding', '12px'],
            ['Gap', '8px'],
            ['Raio', '8px'],
          ].map(([label, value]) => (
            <div key={label} className="flex flex-col items-center gap-1 p-4">
              <dt className="xg-caption text-xg-neutral-500">{label}</dt>
              <dd className="xg-body-md-semibold">{value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  )
}

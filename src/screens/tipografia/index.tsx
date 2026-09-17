import { Link } from '@tanstack/react-router'
import { fontSize, fontWeight, typography } from '../../tokens'
import { buttonExample } from '../componentes/constants'
import { CodeSnippet } from '../layout/code-snippet'
import { bodyTokens, headingTokens } from './constants'

export function Tipografia() {

  return (
    <>
      <div id="tipografia" className="mb-10 scroll-mt-32">
        <h1 className="heading-h3 sm:heading-h1">Tipografia</h1>
        <p className="body-lg mt-4 max-w-xl text-neutral-600">
          Clareza em cada palavra. Uma família, dois pesos e uma escala
          consistente para construir nossas interfaces.
        </p>
      </div>

      <section id="familia" aria-labelledby="familia-titulo" className="scroll-mt-32 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
        <div className="flex flex-wrap items-start justify-between gap-6 p-6 sm:p-8">
          <div>
            <p className="caption mb-3 text-neutral-500">FAMÍLIA PRINCIPAL</p>
            <h2 id="familia-titulo" className="heading-h3">Fonte padrão</h2>
            <p className="body-sm mt-3 text-neutral-500">A fonte do sistema para todas as nossas palavras.</p>
          </div>
          <span className="caption rounded-full border border-neutral-200 px-3 py-1.5 text-neutral-600">Sans-serif</span>
        </div>
        <div className="grid divide-y divide-neutral-200 border-t border-neutral-200 bg-green-50 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          <div className="p-6 sm:p-8">
            <p className="font-sans text-5xl font-regular leading-none" aria-hidden="true">Aa Bb Cc</p>
            <p className="body-sm mt-6 text-neutral-600">Regular <span className="ml-2 text-neutral-500">{fontWeight.regular}</span></p>
          </div>
          <div className="p-6 sm:p-8">
            <p className="font-sans text-5xl font-semibold leading-none" aria-hidden="true">Aa Bb Cc</p>
            <p className="body-sm mt-6 text-neutral-600">SemiBold <span className="ml-2 text-neutral-500">{fontWeight.semibold}</span></p>
          </div>
        </div>
      </section>

      <section id="escala" aria-labelledby="escala-titulo" className="mt-12 scroll-mt-32">
        <h2 id="escala-titulo" className="heading-h5">Escala de tamanhos</h2>
        <p className="body-md mt-2 text-neutral-600">Nove tamanhos, do detalhe ao destaque.</p>
        <dl className="mt-6 grid grid-cols-3 overflow-hidden rounded-xl border border-neutral-200 bg-white sm:grid-cols-5 xl:grid-cols-9">
          {Object.entries(fontSize).map(([name, size]) => (
            <div key={name} className="flex flex-col items-center gap-2 p-4">
              <dt className="caption text-neutral-500">{name}</dt>
              <dd className="body-md-semibold">{size.replace('px', '')}<span className="caption ml-0.5 text-neutral-500">px</span></dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="estilos" aria-labelledby="estilos-titulo" className="mt-12 scroll-mt-32">
        <h2 id="estilos-titulo" className="heading-h5">Estilos de texto</h2>
        <p className="body-md mt-2 text-neutral-600">Combinações prontas para uma hierarquia clara.</p>

        <div className="mt-6 overflow-hidden rounded-xl border border-neutral-200 bg-white">
          <h3 className="body-sm-semibold border-b border-neutral-200 bg-neutral-100/70 px-6 py-4">Headings <span className="caption ml-2 text-neutral-500">SemiBold · 600</span></h3>
          <dl className="divide-y divide-neutral-100">
            {headingTokens.map((name) => (
              <div key={name} className="grid gap-3 px-6 py-6 sm:grid-cols-[minmax(0,1fr)_180px] sm:items-center">
                <dt className="caption text-neutral-500 sm:col-start-2 sm:row-start-1">
                  <code className="font-sans">{name}</code>
                  <span className="mt-1 block">{typography[name].fontSize} / {typography[name].lineHeight}</span>
                </dt>
                <dd className={`${name} sm:col-start-1 sm:row-start-1`}>Heading {name.slice(-1)}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-neutral-200 bg-white">
          <h3 className="body-sm-semibold border-b border-neutral-200 bg-neutral-100/70 px-6 py-4">Body e caption <span className="caption ml-2 text-neutral-500">Regular e SemiBold</span></h3>
          <dl className="divide-y divide-neutral-100">
            {bodyTokens.map((name) => (
              <div key={name} className="grid gap-3 px-6 py-5 sm:grid-cols-[minmax(0,1fr)_180px] sm:items-center">
                <dt className="caption text-neutral-500 sm:col-start-2 sm:row-start-1">
                  <code className="font-sans">{name}</code>
                  <span className="mt-1 block">{typography[name].fontSize} / {typography[name].lineHeight} · {typography[name].fontWeight}</span>
                </dt>
                <dd className={`${name} sm:col-start-1 sm:row-start-1`}>
                  {name.endsWith('-link') ? (
                    <a className="text-green-800 underline underline-offset-4 hover:text-green-950" href="#exemplo">Conheça a tipografia em uso</a>
                  ) : name === 'caption' ? 'Pequenos detalhes também contam.' : 'Boas ideias começam com clareza.'}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="exemplo" aria-labelledby="exemplo-titulo" className="mt-12 scroll-mt-32">
        <h2 id="exemplo-titulo" className="heading-h5">Da escala à interface</h2>
        <p className="body-md mt-2 text-neutral-600">
          O componente <Link className="text-green-800 underline underline-offset-4 hover:text-green-950" to="/componentes/botao">Button</Link> usa
          {' '}body-md-semibold na ação principal.
        </p>
        <div className="mt-6 overflow-hidden rounded-xl border border-neutral-200 bg-white">
          <CodeSnippet className="rounded-none" code={buttonExample} />
        </div>
      </section>
    </>
  )
}

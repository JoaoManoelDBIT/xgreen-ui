import { Link } from '@tanstack/react-router'
import { fontSize, fontWeight, typography } from '../../tokens'
import { bodyTokens, headingTokens } from './constants'

export function Tipografia() {

  return (
    <>
      <div id="tipografia" className="mb-10 scroll-mt-32">
        <h1 className="xg-heading-h3 sm:xg-heading-h1">Tipografia</h1>
      </div>

      <section id="familia" aria-labelledby="familia-titulo" className="scroll-mt-32 overflow-hidden rounded-2xl border border-xg-neutral-200 bg-xg-white">
        <div className="flex flex-wrap items-start justify-between gap-6 p-6 sm:p-8">
          <div>
            <p className="xg-caption mb-3 text-xg-neutral-500">FAMÍLIA PRINCIPAL</p>
            <h2 id="familia-titulo" className="xg-heading-h3">Fonte padrão</h2>
            <p className="xg-body-sm mt-3 text-xg-neutral-500">A fonte do sistema para todas as nossas palavras.</p>
          </div>
          <span className="xg-caption rounded-full border border-xg-neutral-200 px-3 py-1.5 text-xg-neutral-600">Sans-serif</span>
        </div>
        <div className="grid divide-y divide-xg-neutral-200 border-t border-xg-neutral-200 bg-xg-green-50 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          <div className="p-6 sm:p-8">
            <p className="font-xg-sans text-xg-5xl font-xg-regular leading-none" aria-hidden="true">Aa Bb Cc</p>
            <p className="xg-body-sm mt-6 text-xg-neutral-600">Regular <span className="ml-2 text-xg-neutral-500">{fontWeight.regular}</span></p>
          </div>
          <div className="p-6 sm:p-8">
            <p className="font-xg-sans text-xg-5xl font-xg-semibold leading-none" aria-hidden="true">Aa Bb Cc</p>
            <p className="xg-body-sm mt-6 text-xg-neutral-600">SemiBold <span className="ml-2 text-xg-neutral-500">{fontWeight.semibold}</span></p>
          </div>
        </div>
      </section>

      <section id="escala" aria-labelledby="escala-titulo" className="mt-12 scroll-mt-32">
        <h2 id="escala-titulo" className="xg-heading-h5">Escala de tamanhos</h2>
        <dl className="mt-6 grid grid-cols-3 overflow-hidden rounded-xl border border-xg-neutral-200 bg-xg-white sm:grid-cols-5 xl:grid-cols-9">
          {Object.entries(fontSize).map(([name, size]) => (
            <div key={name} className="flex flex-col items-center gap-2 p-4">
              <dt className="xg-caption text-xg-neutral-500">{name}</dt>
              <dd className="xg-body-md-semibold">{size.replace('px', '')}<span className="xg-caption ml-0.5 text-xg-neutral-500">px</span></dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="estilos" aria-labelledby="estilos-titulo" className="mt-12 scroll-mt-32">
        <h2 id="estilos-titulo" className="xg-heading-h5">Estilos de texto</h2>
        <p className="xg-body-md mt-2 text-xg-neutral-600">Combinações prontas para uma hierarquia clara.</p>

        <div className="mt-6 overflow-hidden rounded-xl border border-xg-neutral-200 bg-xg-white">
          <h3 className="xg-body-sm-semibold border-b border-xg-neutral-200 bg-xg-neutral-100/70 px-6 py-4">Headings <span className="xg-caption ml-2 text-xg-neutral-500">SemiBold · 600</span></h3>
          <dl className="divide-y divide-xg-neutral-100">
            {headingTokens.map((name) => (
              <div key={name} className="grid gap-3 px-6 py-6 sm:grid-cols-[minmax(0,1fr)_180px] sm:items-center">
                <dt className="xg-caption text-xg-neutral-500 sm:col-start-2 sm:row-start-1">
                  <code className="font-xg-sans">xg-{name}</code>
                  <span className="mt-1 block">{typography[name].fontSize} / {typography[name].lineHeight}</span>
                </dt>
                <dd className={`xg-${name} sm:col-start-1 sm:row-start-1`}>Heading {name.slice(-1)}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-xg-neutral-200 bg-xg-white">
          <h3 className="xg-body-sm-semibold border-b border-xg-neutral-200 bg-xg-neutral-100/70 px-6 py-4">Body e caption <span className="xg-caption ml-2 text-xg-neutral-500">Regular e SemiBold</span></h3>
          <dl className="divide-y divide-xg-neutral-100">
            {bodyTokens.map((name) => (
              <div key={name} className="grid gap-3 px-6 py-5 sm:grid-cols-[minmax(0,1fr)_180px] sm:items-center">
                <dt className="xg-caption text-xg-neutral-500 sm:col-start-2 sm:row-start-1">
                  <code className="font-xg-sans">xg-{name}</code>
                  <span className="mt-1 block">{typography[name].fontSize} / {typography[name].lineHeight} · {typography[name].fontWeight}</span>
                </dt>
                <dd className={`xg-${name} sm:col-start-1 sm:row-start-1`}>
                  {name.endsWith('-link') ? (
                    <Link className="text-xg-green-800 underline underline-offset-4 hover:text-xg-green-950" to="/componentes/botao">Conheça a tipografia em uso</Link>
                  ) : name === 'caption' ? 'Pequenos detalhes também contam.' : 'Boas ideias começam com clareza.'}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}

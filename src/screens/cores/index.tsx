import { colors, colorShadeOpacity } from '../../tokens'
import type { ColorShade } from '../../tokens'

export function Cores() {
  return (
    <section id="cores" aria-labelledby="cores-titulo" className="scroll-mt-32">
      <h1 id="cores-titulo" className="heading-h3 sm:heading-h1">Cores</h1>
      <p className="body-md mt-3 text-neutral-600">
        Oito famílias primitivas, com HEX e opacidade exatamente como no Figma.
      </p>

      {Object.entries(colors).map(([family, scale]) => (
        <div key={family} id={`cor-${family}`} className="mt-8 scroll-mt-32">
          <h3 className="body-md-semibold capitalize">{family}</h3>
          <dl className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-10">
            {Object.entries(scale).map(([shade, hex]) => (
              <div key={shade} className="min-w-0 overflow-hidden rounded-lg border border-neutral-200 bg-white">
                <div aria-hidden="true" className="h-16 border-b border-neutral-200" style={{ backgroundColor: hex }} />
                <dt className="body-sm-semibold px-3 pt-3">
                  <code className="font-sans">{family}.{shade}</code>
                </dt>
                <dd className="caption wrap-break-word px-3 pt-1 pb-3 text-neutral-600">
                  <span className="block">{hex}</span>
                  <span className="block">{colorShadeOpacity[Number(shade) as ColorShade]}</span>
                  <span className="block">--color-{family}-{shade}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </section>
  )
}

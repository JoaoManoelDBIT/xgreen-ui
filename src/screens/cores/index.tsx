import { colors } from '../../tokens'

export function Cores() {
  return (
    <section id="cores" aria-labelledby="cores-titulo" className="scroll-mt-32">
      <h1 id="cores-titulo" className="xg-heading-h3 sm:xg-heading-h1">Cores</h1>

      {Object.entries(colors).map(([family, scale]) => (
        <div key={family} id={`cor-${family}`} className="mt-8 scroll-mt-32">
          <h3 className="xg-body-md-semibold capitalize">{family}</h3>
          <dl className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {Object.entries(scale).map(([shade, hex]) => (
              <div key={shade} className="min-w-0 overflow-hidden rounded-lg border border-xg-neutral-200 bg-xg-white">
                <div aria-hidden="true" className="h-24 border-b border-xg-neutral-200" style={{ backgroundColor: hex }} />
                <dt className="xg-body-sm-semibold px-4 pt-4">
                  <code className="font-xg-sans">{family}.{shade}</code>
                </dt>
                <dd className="xg-caption px-4 pt-1 pb-4 text-xg-neutral-600">
                  <span className="block">{hex}</span>
                  <span className="mt-0.5 block break-all">{`--xg-color-${family}-${shade}`}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </section>
  )
}

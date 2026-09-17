import { type ReactNode, useState } from 'react'

function CopyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect width="13" height="13" x="8" y="8" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const TOKEN =
  /(\b(?:import|from)\b)|('[^'\n]*'|"[^"\n]*")|(<\/?[A-Za-z][\w.-]*)|(\/?>)|([A-Za-z_:][\w:-]*(?==))|(=)|(\s+)|([^\s<>="'`]+)/g

function highlightTsx(code: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let last = 0

  function push(node: ReactNode) {
    nodes.push(node)
  }

  for (const match of code.matchAll(TOKEN)) {
    const index = match.index ?? 0

    if (index > last) {
      push(<span key={nodes.length}>{code.slice(last, index)}</span>)
    }

    const [raw, keyword, string, tag, bracket, attr, eq, space, other] = match

    if (keyword) {
      push(<span key={nodes.length} className="text-[#AF00DB]">{keyword}</span>)
    } else if (string) {
      push(<span key={nodes.length} className="text-[#A31515]">{string}</span>)
    } else if (tag || bracket) {
      push(<span key={nodes.length} className="text-[#800000]">{tag ?? bracket}</span>)
    } else if (attr) {
      push(<span key={nodes.length} className="text-[#E50000]">{attr}</span>)
    } else if (eq) {
      push(<span key={nodes.length} className="text-neutral-700">{eq}</span>)
    } else if (space) {
      nodes.push(space)
    } else {
      push(<span key={nodes.length} className="text-neutral-800">{other}</span>)
    }

    last = index + raw.length
  }

  if (last < code.length) {
    push(<span key={nodes.length}>{code.slice(last)}</span>)
  }

  return nodes
}

export function CodeSnippet({
  code,
  className = '',
}: {
  code: string
  className?: string
}) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className={`flex items-start gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 ${className}`.trim()}>
      <pre className="min-w-0 flex-1 overflow-hidden font-mono text-xs leading-5 whitespace-pre-wrap text-neutral-800">
        <code>{highlightTsx(code)}</code>
      </pre>
      <button
        type="button"
        aria-label={copied ? 'Código copiado' : 'Copiar código'}
        onClick={copy}
        className="inline-flex size-7 shrink-0 items-center justify-center rounded-md text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
      >
        {copied ? <span className="text-green-600"><CheckIcon /></span> : <CopyIcon />}
      </button>
      <p role="status" className="sr-only">
        {copied ? 'Exemplo copiado para a área de transferência.' : ''}
      </p>
    </div>
  )
}

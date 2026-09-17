import { Link, type LinkProps } from '@tanstack/react-router'
import type { ReactNode } from 'react'

export function SidebarLink({
  to,
  hash,
  active,
  inSection = false,
  nested = false,
  children,
}: {
  to: LinkProps['to']
  hash?: string
  active: boolean
  inSection?: boolean
  nested?: boolean
  children: ReactNode
}) {
  return (
    <Link
      to={to}
      hash={hash}
      aria-current={active ? 'page' : undefined}
      className={[
        'flex items-center gap-2 rounded-md px-2.5 py-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700',
        nested ? 'body-sm' : 'body-sm-semibold',
        active
          ? 'bg-green-50 text-green-900'
          : inSection
            ? 'text-neutral-950'
            : nested
              ? 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950'
              : 'text-neutral-800 hover:bg-neutral-50 hover:text-neutral-950',
      ].join(' ')}
    >
      {children}
    </Link>
  )
}

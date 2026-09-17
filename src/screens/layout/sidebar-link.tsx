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
        'flex items-center gap-2 rounded-md px-2.5 py-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-xg-green-700',
        nested ? 'xg-body-sm' : 'xg-body-sm-semibold',
        active
          ? 'bg-xg-green-50 text-xg-green-900'
          : inSection
            ? 'text-xg-neutral-950'
            : nested
              ? 'text-xg-neutral-600 hover:bg-xg-neutral-50 hover:text-xg-neutral-950'
              : 'text-xg-neutral-800 hover:bg-xg-neutral-50 hover:text-xg-neutral-950',
      ].join(' ')}
    >
      {children}
    </Link>
  )
}

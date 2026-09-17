import type { ComponentProps } from 'react'

const variants = {
  primary: 'xg-button--primary',
  outline: 'xg-button--outline',
  transparent: 'xg-button--transparent',
  error: 'xg-button--error',
  'outline-error': 'xg-button--outline-error',
  'transparent-error': 'xg-button--transparent-error',
  neutral: 'xg-button--neutral',
  'outline-neutral': 'xg-button--outline-neutral',
  'transparent-neutral': 'xg-button--transparent-neutral',
} as const

export type ButtonVariant = keyof typeof variants

export interface ButtonProps extends Omit<ComponentProps<'button'>, 'className'> {
  variant?: ButtonVariant
  className?: string
}

export function Button({
  variant = 'primary',
  className,
  type = 'button',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={['xg-button', variants[variant], className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}

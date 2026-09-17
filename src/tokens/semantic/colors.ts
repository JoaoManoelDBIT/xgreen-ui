import { colors } from '../primitives/colors'

export const semanticColors = {
  primary: '#008149',
  'primary-hover': '#006137',
  outline: '#F0F5FB',
  error: '#BB3030',
  'error-hover': '#8C2424',
} as const

export const semanticColorCssVariables: Record<string, string> = {
  '--color-primary': semanticColors.primary,
  '--color-primary-hover': semanticColors['primary-hover'],
  '--color-outline': semanticColors.outline,
  '--color-error': semanticColors.error,
  '--color-error-hover': semanticColors['error-hover'],
}

const disabled = {
  background: colors.neutral[50],
  border: colors.neutral[500],
  text: colors.neutral[500],
} as const

export const button = {
  primary: {
    default: {
      background: semanticColors.primary,
      border: semanticColors.primary,
    },
    hover: {
      background: semanticColors['primary-hover'],
      border: semanticColors['primary-hover'],
    },
    focus: {
      background: semanticColors.primary,
      border: semanticColors.primary,
    },
    disabled,
  },
  outline: {
    default: {
      background: semanticColors.outline,
      border: semanticColors.primary,
    },
    hover: {
      background: semanticColors.outline,
      border: semanticColors['primary-hover'],
    },
    focus: {
      background: semanticColors.outline,
      border: semanticColors.primary,
    },
    disabled,
  },
  transparent: {
    default: {
      background: 'transparent',
      border: 'transparent',
      text: semanticColors.primary,
    },
    hover: {
      background: 'transparent',
      border: 'transparent',
      text: semanticColors['primary-hover'],
    },
    focus: {
      background: 'transparent',
      border: 'transparent',
      text: semanticColors.primary,
    },
    disabled: {
      background: 'transparent',
      border: 'transparent',
      text: colors.neutral[500],
    },
  },
  error: {
    default: {
      background: semanticColors.error,
      border: semanticColors.error,
    },
    hover: {
      background: semanticColors['error-hover'],
      border: semanticColors['error-hover'],
    },
    focus: {
      background: semanticColors.error,
      border: semanticColors.error,
    },
    disabled,
  },
  'outline-error': {
    default: {
      background: semanticColors.outline,
      border: semanticColors.error,
      text: semanticColors.error,
    },
    hover: {
      background: semanticColors.outline,
      border: semanticColors['error-hover'],
      text: semanticColors['error-hover'],
    },
    focus: {
      background: semanticColors.outline,
      border: semanticColors.error,
      text: semanticColors.error,
    },
    disabled,
  },
  'transparent-error': {
    default: {
      background: 'transparent',
      border: 'transparent',
      text: semanticColors.error,
    },
    hover: {
      background: 'transparent',
      border: 'transparent',
      text: semanticColors['error-hover'],
    },
    focus: {
      background: 'transparent',
      border: 'transparent',
      text: semanticColors.error,
    },
    disabled: {
      background: 'transparent',
      border: 'transparent',
      text: colors.neutral[500],
    },
  },
  neutral: {
    default: {
      background: semanticColors.outline,
      border: colors.neutral[200],
      text: colors.neutral[800],
    },
    hover: {
      background: colors.neutral[50],
      border: colors.neutral[300],
      text: colors.neutral[800],
    },
    focus: {
      background: semanticColors.outline,
      border: colors.neutral[200],
      text: colors.neutral[800],
    },
    disabled,
  },
  'outline-neutral': {
    default: {
      background: semanticColors.outline,
      border: colors.neutral[200],
      text: colors.neutral[800],
    },
    hover: {
      background: semanticColors.outline,
      border: colors.neutral[300],
      text: colors.neutral[800],
    },
    focus: {
      background: semanticColors.outline,
      border: colors.neutral[200],
      text: colors.neutral[800],
    },
    disabled,
  },
  'transparent-neutral': {
    default: {
      background: 'transparent',
      border: 'transparent',
      text: colors.neutral[800],
    },
    hover: {
      background: 'transparent',
      border: 'transparent',
      text: colors.neutral[900],
    },
    focus: {
      background: 'transparent',
      border: 'transparent',
      text: colors.neutral[800],
    },
    disabled: {
      background: 'transparent',
      border: 'transparent',
      text: colors.neutral[500],
    },
  },
} as const

export type SemanticColors = typeof semanticColors
export type ButtonTokens = typeof button

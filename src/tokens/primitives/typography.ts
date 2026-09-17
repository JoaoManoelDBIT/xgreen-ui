export const fontFamily = {
  sans: 'var(--default-font-family)',
} as const

export const fontWeight = {
  regular: 400,
  semibold: 600,
} as const

export const fontSize = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '20px',
  xl: '24px',
  '2xl': '32px',
  '3xl': '40px',
  '4xl': '48px',
  '5xl': '60px',
} as const

export const lineHeight = {
  16: fontSize.md,
  20: fontSize.lg,
  24: fontSize.xl,
  28: '28px',
  40: fontSize['3xl'],
  48: fontSize['4xl'],
  56: '56px',
  72: '72px',
} as const

export type FontFamily = (typeof fontFamily)[keyof typeof fontFamily]
export type FontWeight = (typeof fontWeight)[keyof typeof fontWeight]
export type FontSize = (typeof fontSize)[keyof typeof fontSize]
export type LineHeight = (typeof lineHeight)[keyof typeof lineHeight]

import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
} from '../primitives/typography'

const regular = {
  fontFamily: fontFamily.sans,
  fontWeight: fontWeight.regular,
} as const

const semibold = {
  ...regular,
  fontWeight: fontWeight.semibold,
} as const

const bodySm = {
  ...regular,
  fontSize: fontSize.sm,
  lineHeight: lineHeight[16],
} as const

const bodyMd = {
  ...regular,
  fontSize: fontSize.md,
  lineHeight: lineHeight[20],
} as const

const bodyLg = {
  ...regular,
  fontSize: fontSize.lg,
  lineHeight: lineHeight[24],
} as const

export const typography = {
  'heading-h1': {
    ...semibold,
    fontSize: fontSize['5xl'],
    lineHeight: lineHeight[72],
  },
  'heading-h2': {
    ...semibold,
    fontSize: fontSize['4xl'],
    lineHeight: lineHeight[56],
  },
  'heading-h3': {
    ...semibold,
    fontSize: fontSize['3xl'],
    lineHeight: lineHeight[48],
  },
  'heading-h4': {
    ...semibold,
    fontSize: fontSize['2xl'],
    lineHeight: lineHeight[40],
  },
  'heading-h5': {
    ...semibold,
    fontSize: fontSize.xl,
    lineHeight: lineHeight[28],
  },
  'heading-h6': {
    ...semibold,
    fontSize: fontSize.lg,
    lineHeight: lineHeight[24],
  },
  'body-sm': bodySm,
  'body-sm-semibold': {
    ...bodySm,
    fontWeight: fontWeight.semibold,
  },
  'body-sm-link': bodySm,
  'body-md': bodyMd,
  'body-md-link': bodyMd,
  'body-md-semibold': {
    ...bodyMd,
    fontWeight: fontWeight.semibold,
  },
  'body-lg': bodyLg,
  'body-lg-link': bodyLg,
  'body-lg-semibold': {
    ...bodyLg,
    fontWeight: fontWeight.semibold,
  },
  caption: {
    ...regular,
    fontSize: fontSize.xs,
    lineHeight: lineHeight[16],
  },
} as const

export type TypographyTokenName = keyof typeof typography
export type TypographyToken = (typeof typography)[TypographyTokenName]

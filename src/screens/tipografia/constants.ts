import type { TypographyTokenName } from '../../tokens'

export const headingTokens = [
  'heading-h1',
  'heading-h2',
  'heading-h3',
  'heading-h4',
  'heading-h5',
  'heading-h6',
] as const satisfies readonly TypographyTokenName[]

export const bodyTokens = [
  'body-sm',
  'body-sm-semibold',
  'body-sm-link',
  'body-md',
  'body-md-semibold',
  'body-md-link',
  'body-lg',
  'body-lg-semibold',
  'body-lg-link',
  'caption',
] as const satisfies readonly TypographyTokenName[]

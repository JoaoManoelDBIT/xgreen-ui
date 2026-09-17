export const colorShadeOpacity = {
  25: '5%',
  50: '10%',
  100: '20%',
  200: '40%',
  300: '60%',
  400: '80%',
  500: '100%',
  600: '80%',
  700: '60%',
  800: '40%',
  900: '20%',
  950: '10%',
} as const

export const colors = {
  neutral: {
    25: '#EBF0F6',
    50: '#E5EAF1',
    100: '#DAE0E7',
    200: '#C5CAD3',
    300: '#AFB5C0',
    400: '#9A9FAC',
    500: '#848A98',
    600: '#6A6E7A',
    700: '#4F535B',
    800: '#35373D',
    900: '#1A1C1E',
    950: '#0D0E0F',
  },
  green: {
    50: '#E6F6EF',
    100: '#CCECCC',
    200: '#99D999',
    300: '#66C766',
    400: '#33B433',
    500: '#00A000',
    600: '#008100',
    700: '#006100',
    800: '#004000',
    900: '#002000',
    950: '#001000',
  },
  blue: {
    50: '#E6ECF6',
    100: '#CCD9EC',
    200: '#99B3D9',
    300: '#668CC6',
    400: '#3366B3',
    500: '#0040A0',
    600: '#003380',
    700: '#002660',
    800: '#001A40',
    900: '#000D20',
    950: '#000610',
  },
  purple: {
    50: '#EDE6F6',
    100: '#DBCCEC',
    200: '#B899D9',
    300: '#9466C6',
    400: '#7133B3',
    500: '#4D00A0',
    600: '#3E0080',
    700: '#2E0060',
    800: '#1F0040',
    900: '#0F0020',
    950: '#080010',
  },
  red: {
    50: '#FDECEC',
    100: '#FBD8D8',
    200: '#F7B1B1',
    300: '#F28A8A',
    400: '#EE6363',
    500: '#EA3C3C',
    600: '#BB3030',
    700: '#8C2424',
    800: '#5E1818',
    900: '#2F0C0C',
    950: '#170606',
  },
  orange: {
    50: '#FFF1E8',
    100: '#FFE4D0',
    200: '#FFC8A1',
    300: '#FFAD73',
    400: '#FF9144',
    500: '#FF7615',
    600: '#CC5E11',
    700: '#99470D',
    800: '#662F08',
    900: '#331804',
    950: '#190C02',
  },
  yellow: {
    50: '#FFF8E8',
    100: '#FFF2D0',
    200: '#FFE5A1',
    300: '#FFD773',
    400: '#FFCA44',
    500: '#FFBD15',
    600: '#CC9711',
    700: '#99710D',
    800: '#664C08',
    900: '#332604',
    950: '#191302',
  },
  cyan: {
    50: '#E8FFFC',
    100: '#D0FFFA',
    200: '#A1FFF4',
    300: '#73FFEF',
    400: '#44FFE9',
    500: '#15FFE4',
    600: '#11CCB6',
    700: '#0D9989',
    800: '#08665B',
    900: '#04332E',
    950: '#021917',
  },
} as const

export type Colors = typeof colors
export type ColorFamilyName = keyof Colors
export type ColorShade = keyof typeof colorShadeOpacity
export type ColorFamily<Name extends ColorFamilyName = ColorFamilyName> = Colors[Name]

function shadeOpacity(shade: string) {
  return colorShadeOpacity[Number(shade) as ColorShade]
}

function cssVarsForFamily<Name extends ColorFamilyName>(family: Name) {
  const scale = colors[family]

  return Object.fromEntries(
    Object.keys(scale).map((shade) => [shade, `var(--xg-color-${family}-${shade})`]),
  ) as { [Shade in keyof Colors[Name]]: `var(--xg-color-${Name}-${Extract<Shade, string | number>})` }
}

export const colorCssVariables: Record<string, string> = Object.fromEntries(
  Object.entries(colors).flatMap(([family, scale]) =>
    Object.entries(scale).flatMap(([shade, hex]) => [
      [`--xg-color-${family}-${shade}`, hex],
      [`--xg-color-${family}-${shade}-opacity`, shadeOpacity(shade)],
    ]),
  ),
)

export const colorCssVars = {
  neutral: cssVarsForFamily('neutral'),
  green: cssVarsForFamily('green'),
  blue: cssVarsForFamily('blue'),
  purple: cssVarsForFamily('purple'),
  red: cssVarsForFamily('red'),
  orange: cssVarsForFamily('orange'),
  yellow: cssVarsForFamily('yellow'),
  cyan: cssVarsForFamily('cyan'),
} as const

export type ColorCssVars = typeof colorCssVars

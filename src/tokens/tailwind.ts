import plugin from 'tailwindcss/plugin'
import { colorCssVariables, colors } from './primitives/colors'
import { fontSize, fontWeight } from './primitives/typography'
import { semanticColorCssVariables, semanticColors } from './semantic/colors'
import { typography } from './semantic/typography'

export default plugin(
  ({ addBase, addUtilities }) => {
    addBase({
      ':root': {
        ...colorCssVariables,
        ...semanticColorCssVariables,
      },
    })
    addUtilities(
      Object.fromEntries(
        Object.entries(typography).map(([name, token]) => [
          `.${name}`,
          {
            ...token,
            fontWeight: String(token.fontWeight),
          },
        ]),
      ),
    )
  },
  {
    theme: {
      extend: {
        colors: {
          ...colors,
          ...semanticColors,
          xg: {
            ...semanticColors,
            ...colors,
          },
        },
      },
      fontWeight: Object.fromEntries(
        Object.entries(fontWeight).map(([name, weight]) => [name, String(weight)]),
      ),
      fontSize: { ...fontSize },
    },
  },
)

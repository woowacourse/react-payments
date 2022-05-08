import { addDecorator } from '@storybook/react'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'

import { CardInfoProvider } from '../src/context/cardInfo-context'

addDecorator(withThemesProvider([theme]), ThemeProvider)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <CardInfoProvider>
      <Story />
    </CardInfoProvider>
  ),
]

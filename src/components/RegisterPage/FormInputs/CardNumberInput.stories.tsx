import type { Meta, StoryObj } from '@storybook/react';
import CardNumberInput, { S } from './CardNumberInput';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyle';

const CardNumberInputMeta = {
  component: CardNumberInput,
  title: 'CardNumberInput Component',

  decorators: [
    (Story) => (
      <ThemeProvider theme={S}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof CardNumberInput>;

export default CardNumberInputMeta;

type Story = StoryObj<typeof CardNumberInputMeta>;

export const Primary: Story = {
  args: {
    cardNumber: {
      number1: '',
      number2: '',
      number3: '',
      number4: '',
    },

    setCardNumber: () => {},
  },
};

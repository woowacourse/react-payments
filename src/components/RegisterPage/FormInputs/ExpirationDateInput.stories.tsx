import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import ExpirationDateInput, { S } from './ExpirationDateInput';
import { GlobalStyle } from 'styles/GlobalStyle';

const ExpirationDateInputMeta = {
  component: ExpirationDateInput,
  title: 'ExpirationDateInput Component',

  decorators: [
    (Story) => (
      <ThemeProvider theme={S}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ExpirationDateInput>;

export default ExpirationDateInputMeta;

type Story = StoryObj<typeof ExpirationDateInputMeta>;

export const Primary: Story = {
  args: {
    date: {
      month: '',
      year: '',
    },

    setDate: () => {},
  },
};

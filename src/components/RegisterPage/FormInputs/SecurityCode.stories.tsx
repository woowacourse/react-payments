import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyle';
import SecurityCodeInput, { S } from './SecurityCodeInput';

const SecurityCodeInputMeta = {
  component: SecurityCodeInput,
  title: 'SecurityCodeInput Component',

  decorators: [
    (Story) => (
      <ThemeProvider theme={S}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof SecurityCodeInput>;

export default SecurityCodeInputMeta;

type Story = StoryObj<typeof SecurityCodeInputMeta>;

export const Primary: Story = {
  args: {
    code: {
      code: '',
    },

    setCode: () => {},
  },
};

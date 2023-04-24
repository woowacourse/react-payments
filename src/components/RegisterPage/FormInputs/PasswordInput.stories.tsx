import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyle';
import PasswordInput, { S } from './PasswordInput';

const PassWordInputMeta = {
  component: PasswordInput,
  title: 'PasswordInput Component',

  decorators: [
    (Story) => (
      <ThemeProvider theme={S}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof PasswordInput>;

export default PassWordInputMeta;

type Story = StoryObj<typeof PassWordInputMeta>;

export const Primary: Story = {
  args: {
    password: {
      password1: '',
      password2: '',
    },

    setPassword: () => {},
  },
};

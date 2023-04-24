import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import NameInput, { S } from './NameInput';
import { GlobalStyle } from 'styles/GlobalStyle';

const NameInputMeta = {
  component: NameInput,
  title: 'NameInput Component',

  decorators: [
    (Story) => (
      <ThemeProvider theme={S}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof NameInput>;

export default NameInputMeta;

type Story = StoryObj<typeof NameInputMeta>;

export const Primary: Story = {
  args: {
    name: {
      name: '',
    },

    setName: () => {},
  },
};

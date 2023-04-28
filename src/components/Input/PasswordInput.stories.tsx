import { Meta, StoryObj } from '@storybook/react';
import { theme } from 'components/style/theme';
import { ThemeProvider } from 'styled-components';
import { PasswordInput } from './PasswordInput';

const meta = {
  tags: ['autodocs'],
  title: 'PasswordInput',
  component: PasswordInput,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    first: {},
    second: {},
  },
};

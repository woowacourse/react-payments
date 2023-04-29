import { Meta, StoryObj } from '@storybook/react';
import { theme } from 'components/style/theme';
import { ThemeProvider } from 'styled-components';
import { ExpirationDateInput } from './ExpirationDateInput';

const meta = {
  tags: ['autodocs'],
  title: 'ExpirationDateInput',
  component: ExpirationDateInput,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ExpirationDateInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { month: {}, year: {} },
};

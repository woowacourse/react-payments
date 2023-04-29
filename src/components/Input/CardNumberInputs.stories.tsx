import { Meta, StoryObj } from '@storybook/react';
import { theme } from 'components/style/theme';
import { ThemeProvider } from 'styled-components';
import { CardNumberInputs } from './CardNumberInputs';

const meta = {
  title: 'CardNumberInputs',
  component: CardNumberInputs,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof CardNumberInputs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    valueAndOnChanges: [{ value: '0000' }, { value: '0000' }, { value: '0000' }, { value: '0000' }],
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import CardNumberInput from './CardNumberInput';

const meta = {
  title: 'CardNumberInput',
  component: CardNumberInput,
} satisfies Meta<typeof CardNumberInput>;

export default meta;

type Story = StoryObj<typeof CardNumberInput>;

export const Default: Story = {
  args: {
    setCardNumber: () => {},
  },
};

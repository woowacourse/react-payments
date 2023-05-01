import type { Meta, StoryObj } from '@storybook/react';
import { CardNumberInput } from './CardNumberInput';

const meta = {
  title: 'CardNumberInput',
  component: CardNumberInput,
} satisfies Meta<typeof CardNumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllFilledNumber: Story = {
  args: {
    value: '1234-2345-2122-2323',
  },
};

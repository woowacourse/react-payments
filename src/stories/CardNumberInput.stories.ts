import type { Meta, StoryObj } from '@storybook/react';

import CardNumberInput from '../components/cardForm/CardNumberInput';

const meta = {
  title: 'Payment/CardNumberInput',
  component: CardNumberInput,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardNumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Primary: Story = {};

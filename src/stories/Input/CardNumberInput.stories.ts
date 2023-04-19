import type { Meta, StoryObj } from '@storybook/react';

import { CardNumberInput } from '../../components/input/CardNumberInput';

const meta = {
  title: 'Example/Input',
  component: CardNumberInput,
  tags: ['autodocs'],
} satisfies Meta<typeof CardNumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardNumber: Story = {};

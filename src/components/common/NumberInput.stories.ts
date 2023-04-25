import type { Meta, StoryObj } from '@storybook/react';
import { NumberInput } from './NumberInput';

const meta = {
  title: 'CVCNumberInput',
  component: NumberInput,
} satisfies Meta<typeof NumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllFilledCVCNumber: Story = {
  args: {
    value: '333',
    maxCount: 3,
    width: 8,
    center: true,
    type: 'password',
  },
};

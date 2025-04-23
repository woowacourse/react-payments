import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@/components';

const meta = {
  title: 'Label',
  component: Label,
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '라벨',
    id: 'label-id',
  },
};

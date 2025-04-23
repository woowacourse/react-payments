import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components';

const meta = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '입력해주세요.',
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

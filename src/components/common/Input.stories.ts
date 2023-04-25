import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const UniversalInput: Story = {
  args: {
    value: '',
  },
};

export const CardNameInput: Story = {
  args: {
    maxCount: 30,
    value: '',
    placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
  },
};

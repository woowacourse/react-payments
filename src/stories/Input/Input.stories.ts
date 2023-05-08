import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../components/common/Input';

const meta = {
  title: 'Input/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const UniversalInput: Story = {};

export const CardNameInput: Story = {
  args: {
    maxCount: 30,
    placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
  },
};

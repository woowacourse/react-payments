import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components';

const meta = {
  title: 'Components/Common/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '사용자 입력을 받는 입력 필드 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '입력해주세요',
  },
};

export const WithError: Story = {
  args: {
    placeholder: '입력해주세요',
    isError: true,
  },
};

export const WithValue: Story = {
  args: {
    value: '1234',
    readOnly: true,
  },
};

export const Numeric: Story = {
  args: {
    placeholder: '1234',
    inputMode: 'numeric',
    maxLength: 4,
  },
};

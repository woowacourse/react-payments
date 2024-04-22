import type { Meta, StoryObj } from '@storybook/react';
import Input from '../../components/Input/Input';

const meta = {
  title: 'Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  args: {
    placeholder: 'MM',
    value: '',
    maxLength: 2,
    'aria-invalid': false,
  },
};

export const 입력상태: Story = {
  args: {
    placeholder: 'MM',
    value: '12',
    maxLength: 2,
    'aria-invalid': false,
  },
};

export const 에러상태: Story = {
  args: {
    placeholder: 'MM',
    value: 'aa',
    maxLength: 2,
    'aria-invalid': true,
  },
};

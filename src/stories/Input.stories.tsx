import type { Meta, StoryObj } from '@storybook/react';
import Input from '../components/common/Input/Input';

const meta = {
  title: 'Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'name',
    value: '',
    placeholder: '1234',
    isError: false,
    maxLength: 4,
  },
};

export const Error: Story = {
  args: {
    name: 'name',
    value: 'abcd',
    placeholder: '1234',
    isError: true,
    maxLength: 4,
  },
};

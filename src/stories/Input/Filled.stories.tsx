import type { Meta, StoryObj } from '@storybook/react';
import Input from '../../components/Input/Input';

const meta = {
  title: 'Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    placeholder: 'MM',
    value: '12',
    maxLength: 2,
    invalid: false,
  },
};

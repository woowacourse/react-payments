import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta = {
  title: 'Input',
  component: Input
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: '1234',
    isValid: true,
    onChange: (e) => console.log('입력값:', e.target.value)
  },
  render: (args) => <Input {...args} />
};

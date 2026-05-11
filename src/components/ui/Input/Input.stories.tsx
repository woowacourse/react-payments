import type { Meta, StoryObj } from '@storybook/react-vite';

import Input from './Input';
import { fn } from 'storybook/test';

const meta = {
  title: 'ui/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    placeholder: '1234',
    type: 'text',
    onChange: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '1234',
    variant: 'default',
  },
  render: (args) => <Input {...args} />,
};

export const Error: Story = {
  args: {
    value: '',
    variant: 'error',
  },
  render: (args) => <Input {...args} />,
};

export const Focus: Story = {
  args: {
    value: '',
    variant: 'default',
  },
  render: (args) => <Input {...args} autoFocus />,
};

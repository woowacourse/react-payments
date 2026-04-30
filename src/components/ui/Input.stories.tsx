import type { Meta, StoryObj } from '@storybook/react-vite';

import Input from './Input';
import { fn, within, userEvent } from 'storybook/test';

const meta = {
  title: 'ui/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '1234',
    value: '1234',
    type: 'text',
    onChange: fn(),
    variant: 'default',
  },
  render: (args) => <Input {...args} />,
};

export const Error: Story = {
  args: {
    placeholder: '1234',
    value: '',
    type: 'text',
    onChange: fn(),
    variant: 'error',
  },
  render: (args) => <Input {...args} />,
};

export const Focus: Story = {
  args: {
    placeholder: '1234',
    value: '',
    type: 'text',
    onChange: fn(),
    variant: 'default',
  },
  render: (args) => <Input {...args} autoFocus />,
};

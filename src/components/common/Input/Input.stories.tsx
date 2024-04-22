import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta = {
  title: 'Input',
  component: Input,
  argTypes: {
    type: {
      options: ['text', 'number'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    isValid: true,
    type: 'text',
    placeholder: 'sample',
  },
};

export const Error: Story = {
  args: {
    isValid: false,
    type: 'text',
    placeholder: 'sample',
  },
};

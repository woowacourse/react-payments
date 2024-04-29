import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta = {
  title: 'component/common/Input',
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
    isError: false,
    type: 'text',
    placeholder: 'sample',
  },
};

export const Error: Story = {
  args: {
    isError: true,
    type: 'text',
    placeholder: 'sample',
  },
};

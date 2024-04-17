import type { Meta, StoryObj } from '@storybook/react';
import Input from '../components/Input';

const meta = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
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

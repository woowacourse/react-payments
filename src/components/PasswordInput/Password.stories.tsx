import type { Meta, StoryObj } from '@storybook/react';
import PasswordInput from './PasswordInput';

const meta: Meta<typeof PasswordInput> = {
  title: 'Components/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
  argTypes: {
    values: {
      control: 'object',
      description: '값',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: {
    values: ['12'],
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/Button/Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicButton: Story = {
  args: {
    designType: 'basic',
    children: 'Button',
  },
};

export const TextButton: Story = {
  args: {
    designType: 'text',
    children: 'Button',
  },
};

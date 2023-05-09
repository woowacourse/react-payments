import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/common/Button/Button';

const meta = {
  title: 'Payments/Common/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicButton: Story = {
  args: {
    designType: 'basic',
    children: 'Button',
    width: '300px',
    height: '100px',
    color: 'white',
    backgroundColor: '#1e77a8ac',
  },
};

export const TextButton: Story = {
  args: {
    designType: 'text',
    children: 'Button',
    color: '#1e77a8ac',
  },
};

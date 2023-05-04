import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/Button/Button';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

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

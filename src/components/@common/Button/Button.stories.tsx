import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    content: { control: 'text' },
    style: {
      control: 'select',
      options: ['default', 'bottom'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    content: '확인',
    style: 'default',
  },
};

export const Bottom: Story = {
  args: {
    content: '확인',
    style: 'bottom',
  },
};

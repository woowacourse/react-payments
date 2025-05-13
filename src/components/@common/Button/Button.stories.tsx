import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    content: { control: 'text' },
    style: {
      control: 'select',
      options: ['rounded', 'full'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Rounded: Story = {
  args: {
    content: '확인',
    style: 'rounded',
  },
};

export const Full: Story = {
  args: {
    content: '확인',
    style: 'full',
  },
};

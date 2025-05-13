import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    content: { control: 'text' },
    variant: {
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
    variant: 'rounded',
  },
};

export const Full: Story = {
  args: {
    content: '확인',
    variant: 'full',
  },
};

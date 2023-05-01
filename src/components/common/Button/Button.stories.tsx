import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: '다음',
  },
};

export const Disable: Story = {
  args: {
    isDisable: true,
    text: '다음',
  },
};

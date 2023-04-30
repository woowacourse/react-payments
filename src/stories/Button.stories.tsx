import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/common/Button';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const WhiteDefault: Story = {
  args: {
    children: '<',
  },
};

export const GrayDefault: Story = {
  args: {
    color: 'gray',
    children: '<',
  },
};

export const WhiteCard: Story = {
  args: {
    size: 'card',
    children: '<',
  },
};

export const GrayCard: Story = {
  args: {
    size: 'card',
    color: 'gray',
    children: '<',
  },
};

export const ButtonWithPadding: Story = {
  args: {
    color: 'gray',
    children: '<',
    padding: true,
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import Button from '../../../components/common/Button';

const meta: Meta<typeof Button> = {
  title: 'components/common/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const WhiteDefault: Story = {};

export const GrayDefault: Story = {
  args: {
    color: 'gray',
  },
};

export const WhiteCard: Story = {
  args: {
    size: 'card',
  },
};

export const GrayCard: Story = {
  args: {
    size: 'card',
    color: 'gray',
  },
};

export const ButtonWithPadding: Story = {
  args: {
    color: 'gray',
    padding: true,
  },
};

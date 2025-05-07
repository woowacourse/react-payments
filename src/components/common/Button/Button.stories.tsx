import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Button',
  component: Button,
  args: {
    text: '확인',
    height: '44px'
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const Tall: Story = {
  args: {
    height: '56px'
  }
};

export const WithRadius: Story = {
  args: {
    borderRadius: '8px'
  }
};

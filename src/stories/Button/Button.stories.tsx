import type { Meta, StoryObj } from '@storybook/react';
import Button from './../../components/Button/Button';

const meta = {
  title: 'Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  args: {
    label: '안녕',
  },
};

export const 테두리_둥글게: Story = {
  args: {
    label: '안녕',
    style: {
      borderRadius: 8,
    },
  },
};

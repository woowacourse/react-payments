import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/common/Button';

const meta = {
  title: 'Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '버튼 텍스트',
  },
};

export const Floating: Story = {
  args: {
    text: '버튼 텍스트',
    floating: true,
  },
};

export const OnWidth: Story = {
  args: {
    text: '버튼 텍스트',
    width: 100,
  },
};

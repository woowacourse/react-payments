import type { Meta, StoryObj } from '@storybook/react';
import Button from '../../components/common/Button/Button';

const meta = {
  title: 'Payments/Common/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    children: '완료',
  },
};

export const Secondary: Story = {
  args: {
    children: '카드 추가하기',
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import Header from '../../components/common/Header/Header';

const meta = {
  title: 'Payments/Common/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardList: Story = {
  args: {
    content: '보유 카드',
  },
};

export const CardAdd: Story = {
  args: {
    content: '카드 추가',
    isOverlayPage: true,
  },
};

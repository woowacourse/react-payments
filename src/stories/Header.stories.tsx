import type { Meta, StoryObj } from '@storybook/react';

import Header from '../components/Header';

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: '보유카드',
  },
};

export const AddCard: Story = {
  args: {
    title: '카드 추가',
  },
};

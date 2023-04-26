import type { Meta, StoryObj } from '@storybook/react';

import Header from '.';

const meta: Meta<typeof Header> = {
  title: 'molecules/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const HomeHeader: Story = {
  args: {
    title: '보유카드',
  },
};

export const AddCardHeader: Story = {
  args: {
    title: '카드 추가',
  },
};

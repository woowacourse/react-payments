import type { Meta, StoryObj } from '@storybook/react';
import CardListEmpty from './CardListEmpty';

const meta = {
  title: 'Pages/CardListPage/CardListEmpty',
  component: CardListEmpty,
} satisfies Meta<typeof CardListEmpty>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => console.log('카드 추가 페이지로 이동!'),
  },
};

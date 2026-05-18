import type { Meta, StoryObj } from '@storybook/react';
import CardListError from './CardListError';

const meta = {
  title: 'Pages/CardListPage/CardListError',
  component: CardListError,
} satisfies Meta<typeof CardListError>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => console.log('데이터 다시 불러오기 (fetchCards) 실행!'),
  },
};

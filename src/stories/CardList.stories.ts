import type { Meta, StoryObj } from '@storybook/react';
import CardList from '../components/CardList/CardList';

const meta = {
  component: CardList,
  title: 'CardList',
  tags: ['autodocs'],
  args: {
    cardInfo: [
      {
        cardNumber: '1111-2222-3333-4444',
        expirationDate: '11/28',
        cardOwnerName: '김고니',
        selectedCard: '',
        cardNickName: '',
      },
    ],
  },
} satisfies Meta<typeof CardList>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    cardInfo: [
      {
        ...meta.args.cardInfo[0],
        selectedCard: '비씨카드',
        cardNickName: '고니의 비씨카드',
      },
      {
        ...meta.args.cardInfo[0],
        selectedCard: '하나카드',
        cardNickName: '고니의 하나카드',
      },
      {
        ...meta.args.cardInfo[0],
        selectedCard: '현대카드',
        cardNickName: '고니의 현대카드',
      },
      {
        ...meta.args.cardInfo[0],
        selectedCard: '롯데카드',
        cardNickName: '고니의 롯데카드',
      },
      {
        ...meta.args.cardInfo[0],
        selectedCard: '우리카드',
        cardNickName: '고니의 우리카드',
      },
      {
        ...meta.args.cardInfo[0],
        selectedCard: '신한카드',
        cardNickName: '고니의 신한카드',
      },
      {
        ...meta.args.cardInfo[0],
        selectedCard: '카카오뱅크',
        cardNickName: '고니의 카카오뱅크 카드',
      },
      {
        ...meta.args.cardInfo[0],
        selectedCard: '국민카드',
        cardNickName: '고니의 국민카드',
      },
    ],
  },
};

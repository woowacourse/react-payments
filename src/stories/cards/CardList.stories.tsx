import type { Meta } from '@storybook/react';
import CardList from '../../components/CardList/CardList';

const meta = {
  title: 'Payments/Cards/CardList',
  component: CardList,
  tags: ['autodocs'],
} satisfies Meta<typeof CardList>;

export default meta;

export const Empty = () => <CardList cardList={[]}></CardList>;

export const List = () => (
  <CardList
    cardList={[
      {
        id: 1,
        cardName: '카드 1',
        issuer: '우리카드',
        cardNumber: '1234123412341234',
        expirationDate: {
          month: '12',
          year: '23',
        },
        ownerName: 'WOOWA',
        securityCode: '123',
        password: ['1', '1'],
      },
      {
        id: 2,
        issuer: '현대카드',
        cardName: 'WOOWA의 현대카드',
        cardNumber: '1234123412341234',
        expirationDate: {
          month: '12',
          year: '23',
        },
        ownerName: 'WOOWA',
        securityCode: '123',
        password: ['1', '1'],
      },
    ]}
  ></CardList>
);

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
        cardNumber: '12341234123412341234',
        expirationDate: {
          month: '12',
          year: '23',
        },
        ownerName: 'WOOWACOURSE',
        securityCode: '123',
        password: ['1', '1'],
      },
      {
        cardNumber: '12341234123412341234',
        expirationDate: {
          month: '12',
          year: '23',
        },
        ownerName: 'WOOWACOURSE',
        securityCode: '123',
        password: ['1', '1'],
      },
    ]}
  ></CardList>
);

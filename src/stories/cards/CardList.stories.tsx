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
        cardNumber: ['1234', '1234', '1234', '1234'],
        expirationDate: {
          month: '12',
          year: '23',
        },
        ownerName: 'WOOWACOURSE',
        securityCode: '123',
        password: ['1', '1'],
      },
      {
        cardNumber: ['1234', '1234', '1234', '1234'],
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

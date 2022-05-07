import CardList from '.';

export default {
  title: 'CardList',
  component: CardList,
};

const state = {
  cardNumber: ['1234', '5678', '2468', '3579'],
  expiredDate: ['12', '21'],
  ownerName: 'Yulie',
  secureCode: '123',
  password: ['1', '2'],
  cardName: '록1바',
  color: 'red',
};

export const cardList = () => <CardList />;

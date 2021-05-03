import CardListPage from '../../pages/cardListPage';

export default {
  title: 'Pages/CardListPage',
  component: CardListPage,
};

const Template = args => <CardListPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardList: [
    {
      cardNumber: {
        first: '3000',
        second: '2222',
        third: '9856',
        fourth: '1309',
      },
      cardExpiredDate: {
        month: '12',
        year: '23',
      },
      cardOwner: 'VALLISTA',
      securityCode: '044',
      cardPassword: {
        first: '3',
        second: '6',
      },
      selectedCardInfo: {
        cardId: 1,
        name: '포코 카드',
        color: '#E24141',
      },
      cardNickname: 'Vallista',
      id: 10,
    },
    {
      cardNumber: {
        first: '5555',
        second: '4444',
        third: '4986',
        fourth: '3091',
      },
      cardExpiredDate: {
        month: '09',
        year: '25',
      },
      cardOwner: 'DITTO',
      securityCode: '087',
      cardPassword: {
        first: '7',
        second: '5',
      },
      selectedCardInfo: {
        cardId: 3,
        name: '공원 카드',
        color: '#73BC6D',
      },
      cardNickname: 'Ditto',
      id: 11,
    },
    {
      cardNumber: {
        first: '7777',
        second: '6666',
        third: '4093',
        fourth: '1672',
      },
      cardExpiredDate: {
        month: '01',
        year: '25',
      },
      cardOwner: 'POKO',
      securityCode: '832',
      cardPassword: {
        first: '6',
        second: '4',
      },
      selectedCardInfo: {
        cardId: 8,
        name: '썬 카드',
        color: '#FBCD58',
      },
      cardNickname: 'POKO',
      id: 12,
    },
  ],
  setCardList: () => {},
  setEditCardId: () => {},
  resetCardInfo: () => {},
};

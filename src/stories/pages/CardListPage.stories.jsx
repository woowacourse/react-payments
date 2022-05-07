import { MemoryRouter } from 'react-router-dom';

import { CardListPage } from '../../pages';

export default {
  title: 'Example/Page',
  component: [CardListPage],
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

function CardListTemplate({ cards }) {
  return <CardListPage cards={cards} />;
}

const CardList = CardListTemplate.bind({});
CardList.args = {
  cards: [
    {
      cardCompany: '하리 카드',
      cardColor: '#ADD8E6',
      cardName: '개인 카드',
      cardOwnerName: 'HALEE',
      cardNumber: '1111222233334444',
      validDate: '2022-05',
    },
    {
      cardCompany: '회사 카드',
      cardColor: 'black',
      cardName: '법인 카드',
      cardOwnerName: 'COMPANY',
      cardNumber: '9999888877776666',
      validDate: '2099-12',
    },
  ],
};

export { CardList };

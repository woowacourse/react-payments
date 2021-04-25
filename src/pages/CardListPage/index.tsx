import CreditCard from '../../components/CreditCard';
import CardList from '../../components/CardList';
import Template from '../../components/common/Template';
import { Card } from '../../types';

const dummies: Card[] = [
  {
    id: 1,
    cardBrand: {
      name: '포코카드',
      color: '#547CE4',
    },
    ownerName: 'FANO',
    cardNumber: {
      first: [1, 2, 3, 4],
      second: [1, 2, 3, 4],
      third: [1, 2, 3, 4],
      fourth: [1, 2, 3, 4],
    },
    expDate: {
      month: '3',
      year: '3',
    },
    password: ['1', '2'],
    cvc: '123',
    nickname: '엄카',
  },
  {
    id: 2,
    cardBrand: {
      name: '포코카드',
      color: '#547CE4',
    },
    ownerName: 'FANO',
    cardNumber: {
      first: [1, 2, 3, 4],
      second: [1, 2, 3, 4],
      third: [1, 2, 3, 4],
      fourth: [1, 2, 3, 4],
    },
    expDate: {
      month: '3',
      year: '3',
    },
    password: ['1', '2'],
    cvc: '123',
    nickname: '엄카',
  },
  {
    id: 3,
    cardBrand: {
      name: '포코카드',
      color: '#547CE4',
    },
    ownerName: 'FANO',
    cardNumber: {
      first: [1, 2, 3, 4],
      second: [1, 2, 3, 4],
      third: [1, 2, 3, 4],
      fourth: [1, 2, 3, 4],
    },
    expDate: {
      month: '3',
      year: '3',
    },
    password: ['1', '2'],
    cvc: '123',
    nickname: '엄카',
  },
];

const title = '보유카드';

const CardListPage = () => {
  return (
    <Template title={title}>
      <CardList>
        {dummies.map(card => (
          <li key={card.id}>
            <CreditCard
              cardBrand={card.cardBrand}
              ownerName={card.ownerName}
              cardNumber={card.cardNumber}
              expDate={card.expDate}
              nickname={card.nickname}
            />
            <span className="nickname">{card?.nickname}</span>
          </li>
        ))}
      </CardList>
    </Template>
  );
};

export default CardListPage;

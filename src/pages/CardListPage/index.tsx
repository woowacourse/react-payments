import Template from '../../components/common/Template';
import CreditCard from '../../components/CreditCard';
import CardList from '../../components/CardList';
import { Card } from '../../types';

const dummies: Card[] = [
  {
    id: 1,
    cardName: '포코카드',
    cardColor: '#547CE4',
    ownerName: 'FANO',
    cardNumber: {
      first: 1234,
      second: 1234,
      third: 1234,
      fourth: 1234,
    },
    expDate: {
      month: 3,
      year: 3,
    },
    cvc: 123,
    nickname: '엄카',
  },
  {
    id: 2,
    cardName: '준카드',
    cardColor: '#547CE4',
    ownerName: 'FANO',
    cardNumber: {
      first: 1234,
      second: 1234,
      third: 1234,
      fourth: 1234,
    },
    expDate: {
      month: 3,
      year: 3,
    },
    cvc: 123,
  },
  {
    id: 3,
    cardName: '준카드',
    cardColor: '#547CE4',
    ownerName: 'FANO',
    cardNumber: {
      first: 1234,
      second: 1234,
      third: 1234,
      fourth: 1234,
    },
    expDate: {
      month: 3,
      year: 3,
    },
    cvc: 123,
  },
];

const title = '보유카드';

const CardListPage = () => {
  return (
    <Template title={title}>
      <CardList>
        {[...dummies, ...dummies, ...dummies].map(card => (
          <li key={card.id}>
            <CreditCard
              cardName={card.cardName}
              cardColor={card.cardColor}
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

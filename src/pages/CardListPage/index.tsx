import CreditCard from '../../components/shared/CreditCard';
import CardList from '../../components/cardList';
import Template from '../../components/shared/Template';
import { Card } from '../../types';
import { CARD_LIST_PAGE_TITLE } from '../../constants/title';
import { BLUE } from '../../constants/palette';

const dummies: Card[] = [
  {
    cardBrand: {
      name: '포코카드',
      color: BLUE[500],
    },
    ownerName: 'FANO',
    cardNumber: '1234-1234-1234-1234',
    expDate: {
      month: '3',
      year: '3',
    },
    password: '12',
    CVC: '123',
    nickname: '엄카',
  },
  {
    cardBrand: {
      name: '포코카드',
      color: BLUE[500],
    },
    ownerName: 'FANO',
    cardNumber: '1234-1234-1234-1234',
    expDate: {
      month: '3',
      year: '3',
    },
    password: '12',
    CVC: '123',
    nickname: '엄카',
  },
  {
    cardBrand: {
      name: '포코카드',
      color: BLUE[500],
    },
    ownerName: 'FANO',
    cardNumber: '1234-1234-1234-1234',
    expDate: {
      month: '3',
      year: '3',
    },
    password: '12',
    CVC: '123',
    nickname: '엄카',
  },
];

const CardListPage = () => {
  return (
    <Template title={CARD_LIST_PAGE_TITLE}>
      <CardList>
        {dummies.map(card => (
          <li key={card.cardNumber}>
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

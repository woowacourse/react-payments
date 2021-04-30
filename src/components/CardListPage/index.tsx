import { CARD_MOCK_DATA } from '../../constants/mockData';
import { Card } from '../../types';
import Template from '../shared/Template';
import CreditCard from '../shared/CreditCard';
import CardList from './CardList';

const TITLE = '보유카드';

const CardListPage = () => {
  return (
    <Template title={TITLE}>
      <CardList>
        {CARD_MOCK_DATA.map((card: Card) => (
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

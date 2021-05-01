import { FC } from 'react';
import { CARD_MOCK_DATA } from '../../../constants/mockData';
import { Card } from '../../../types';
import CreditCard from '../../shared/CreditCard';
import AddCardButton from './AddCardButton';
import { CardListContainer, NickName } from './styles';

const CardList: FC = ({ children }) => {
  return (
    <CardListContainer>
      {CARD_MOCK_DATA.map((card: Card) => (
        <li key={card.cardNumber}>
          <CreditCard
            cardBrand={card.cardBrand}
            ownerName={card.ownerName}
            cardNumber={card.cardNumber}
            expDate={card.expDate}
            nickname={card.nickname}
          />
          <NickName>{card?.nickname}</NickName>
        </li>
      ))}
      <li>
        <AddCardButton />
      </li>
    </CardListContainer>
  );
};

export default CardList;

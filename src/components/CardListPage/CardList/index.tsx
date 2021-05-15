import { useEffect, useState, VFC } from 'react';
import { fetchCards } from '../../../firebase/api';
import { Card } from '../../../types';
import CreditCard from '../../shared/CreditCard';
import AddCardButton from './AddCardButton';
import { CardListContainer, NickName } from './styles';

const CardList: VFC = () => {
  const [cards, setCards] = useState<Omit<Card, 'password' | 'CVC'>[]>([]);

  useEffect(() => {
    (async () => {
      const responseData = await fetchCards();
      setCards(responseData);
    })();
  }, []);

  return (
    <CardListContainer>
      {cards.map(card => (
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

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PAGE from '../../../constants/pages';
import { fetchCards, StoredCard } from '../../../firebase/api';
import CreditCard from '../../shared/CreditCard';
import AddCardButton from './AddCardButton';
import { CardListContainer, NickName } from './styles';

const CardList = () => {
  const [cards, setCards] = useState<StoredCard[]>([]);

  useEffect(() => {
    (async () => {
      const responseData = await fetchCards();
      setCards(responseData as StoredCard[]);
    })();
  }, []);

  return (
    <CardListContainer>
      {cards.map(card => (
        <li key={card.id}>
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
        <Link to={PAGE.ADD_CARD.PATH}>
          <AddCardButton />
        </Link>
      </li>
    </CardListContainer>
  );
};

export default CardList;

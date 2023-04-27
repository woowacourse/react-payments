import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CardContext } from '../context/CardProvider';

const useCards = () => {
  const { cards, setCards } = useContext(CardContext);
  const { setCard } = useContext(CardContext);
  const handleSetCards = (
    cardNumbers: Record<number, string>,
    expiredDate: Record<number, string>,
    cardOwnerName: string,
    cardCompany: string
  ) => {
    const newCard = {
      id: uuidv4(),
      cardNumbers,
      expiredDate,
      cardOwnerName,
      cardCompany,
    };
    setCard(newCard);
    setCards([...cards, newCard]);
  };

  return { cards, handleSetCards };
};

export default useCards;

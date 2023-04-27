import { useContext } from 'react';
import { CardContext } from '../context/CardProvider';
import { CardType } from '../types/Card';

const useCards = () => {
  const { cards, setCards } = useContext(CardContext);
  const handleSetCards = (newCard: CardType) => {
    setCards([...cards, newCard]);
  };

  return { cards, handleSetCards };
};

export default useCards;

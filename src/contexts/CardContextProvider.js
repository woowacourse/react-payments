import { createContext, useRef, useState } from 'react';
import { REGISTERED_CARDS, CARD_FRAME } from '../utils/constants/card';

const CardContext = createContext();

const CardContextProvider = ({ children }) => {
  const [cards, setCards] = useState(REGISTERED_CARDS);
  const [currentCard, setCurrentCard] = useState(CARD_FRAME);
  const cardId = useRef(10);

  const addCard = (card) => {
    const targetIndex = cards.findIndex((cardItem) => cardItem.cardId === card.cardId);

    if (targetIndex === -1) {
      setCards([...cards, card]);
      return;
    }

    const newCards = [...cards];
    newCards.splice(targetIndex, 1, card);
    setCards(newCards);
  };

  const updateCardContent = (cardInput) => {
    setCurrentCard((currentCard) => ({ ...currentCard, ...cardInput }));
  };

  const resetCurrentCard = () => {
    setCurrentCard(CARD_FRAME);
  };

  const generateCardId = () => {
    cardId.current += 1;
    return cardId.current;
  };

  return (
    <CardContext.Provider
      value={{
        cards,
        addCard,
        currentCard,
        setCurrentCard,
        updateCardContent,
        resetCurrentCard,
        generateCardId,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
export { CardContext };

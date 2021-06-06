import { createContext, useState } from 'react';
import { REGISTERED_CARDS, CARD_FRAME } from '../utils/constants/card';

const CardContext = createContext();

const CardContextProvider = ({ children }) => {
  const [currentCard, setCurrentCard] = useState(CARD_FRAME);
  const [cards, setCards] = useState(REGISTERED_CARDS);
  let cardId = 2;

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

  const generateCardId = () => {
    cardId = cardId + 1;
    return cardId;
  };

  return (
    <CardContext.Provider
      value={{ currentCard, setCurrentCard, updateCardContent, cards, addCard, generateCardId }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
export { CardContext };

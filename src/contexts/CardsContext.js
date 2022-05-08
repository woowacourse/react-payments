import { createContext } from 'react';

const CardsContext = createContext({
  cardList: [],
  addCard: () => {},
  updateCard: () => {},
});

export default CardsContext;

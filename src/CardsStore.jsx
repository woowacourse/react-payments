import { createContext, useState } from 'react';

export const CardsContext = createContext();

function CardsStore({ children }) {
  const [cards, setCards] = useState([]);
  console.log('cards', cards);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <CardsContext.Provider value={{ cards, setCards }}>{children}</CardsContext.Provider>;
}

export default CardsStore;

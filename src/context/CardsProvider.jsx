import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CardsContext = createContext();

function CardsProvider({ children }) {
  const [cards, setCards] = useState([]);

  return <CardsContext.Provider value={{ cards, setCards }}>{children}</CardsContext.Provider>;
}

CardsProvider.propTypes = {
  children: PropTypes.element,
};

export default CardsProvider;

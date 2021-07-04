import { useState } from 'react';

export const useCardName = () => {
  const initialState = '';
  const [cardName, setCardName] = useState(initialState);

  const handleCardName = ({ target }) => {
    setCardName(target.value);
  };

  return {
    cardName: {
      value: cardName,
      handleChange: handleCardName,
      reset: () => setCardName(initialState),
    },
  };
};

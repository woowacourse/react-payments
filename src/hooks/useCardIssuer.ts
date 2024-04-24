import { useState } from 'react';

function useCardIssuer() {
  const [cardIssuer, setCardIssuer] = useState('');

  const handleCardIssuerChange = (value: string) => {
    setCardIssuer(value);
  };

  const cardIssuerError = !(cardIssuer === '');

  return { cardIssuer, cardIssuerError, handleCardIssuerChange };
}

export default useCardIssuer;

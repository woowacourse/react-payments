import { useState } from 'react';

const useChangeCardIssuer = () => {
  const [cardIssuer, setCardIssuer] = useState('');

  const handleCardIssuerChange = (value: string) => {
    setCardIssuer(value);
  };

  return { cardIssuer, handleCardIssuerChange };
};

export default useChangeCardIssuer;

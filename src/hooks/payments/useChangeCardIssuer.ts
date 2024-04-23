import { useState } from 'react';

const useChangeCardIssuer = () => {
  const [cardIssuer, setCardIssuer] = useState('');
  const [cardIssuerState, setCardIssuerState] = useState({ isSuccess: false });

  const handleCardIssuerChange = (value: string) => {
    if (value) setCardIssuerState({ isSuccess: true });
    // else setCardIssuerState({ isSuccess: false });

    setCardIssuer(value);
  };

  return { cardIssuer, cardIssuerState, handleCardIssuerChange };
};

export default useChangeCardIssuer;

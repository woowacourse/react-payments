import { useState } from 'react';

function useCardIssuer() {
  const [cardIssuer, setCardIssuer] = useState('');
  const [cardIssuerError, setCardIssuerError] = useState(false);

  const handleCardIssuerChange = (value: string) => {
    setCardIssuer(value);
  };

  const handleBlurCardIssuerSelect = () => {
    if (cardIssuer === '') {
      setCardIssuerError(true);
    }
  };

  return {
    cardIssuer,
    cardIssuerError,
    handleCardIssuerChange,
    handleBlurCardIssuerSelect,
  };
}

export default useCardIssuer;

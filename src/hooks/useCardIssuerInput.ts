import { useState } from 'react';

function useCardIssuerInput() {
  const [cardIssuer, setCardIssuer] = useState('');
  const [cardIssuerError, setCardIssuerError] = useState(false);

  const handleCardIssuerChange = (value: string) => {
    setCardIssuer(value);
  };

  const handleBlurCardIssuerSelect = () => {
    if (cardIssuer === '') {
      return setCardIssuerError(true);
    }
    return setCardIssuerError(false);
  };

  return {
    cardIssuer,
    cardIssuerError,
    handleCardIssuerChange,
    handleBlurCardIssuerSelect,
  };
}

export default useCardIssuerInput;

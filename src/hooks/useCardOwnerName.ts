import { useState } from 'react';
import { ALPHABET_REGEX } from '../constants/regex';

const useCardOwnerName = () => {
  const [cardOwnerName, setCardOwnerName] = useState('');

  const checkCardOwnerName = (value: string) => {
    if (value.length === 0) setCardOwnerName('');
    if (!ALPHABET_REGEX.test(value)) return;

    setCardOwnerName(value.toUpperCase());
  };
  return { cardOwnerName, checkCardOwnerName };
};

export default useCardOwnerName;

import { useState, useCallback } from 'react';

import { RULE } from '../constants';

export default function useCardNumber(initialValue) {
  const [cardNumber, setCardNumber] = useState(initialValue);

  const handler = useCallback(({ target: { value } }) => {
    if (value.length >= RULE.CARD_NUMBER_MAX_LENGTH) return;

    setCardNumber(value);
  }, []);

  return [cardNumber, handler];
}

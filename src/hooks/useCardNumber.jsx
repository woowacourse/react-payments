import { useState, useCallback } from 'react';

import { splitCardNumbers } from '../utils/regExp';

export default function useCardNumber(initialValue) {
  const [cardNumber, setCardNumber] = useState(initialValue);
  const [encryptedCardNumber, setEncryptedCardNumber] = useState(initialValue);

  const handler = useCallback(({ target: { value } }) => {
    const numbers = value.replaceAll('-', '');

    setCardNumber(numbers);

    let processedNumbers = numbers;

    if (numbers.length > 8) {
      processedNumbers = numbers.slice(0, 8) + '•'.repeat(numbers.length - 8);
    }

    setEncryptedCardNumber(splitCardNumbers(processedNumbers) ?? initialValue);
  }, []);

  return [cardNumber, handler, encryptedCardNumber];
}

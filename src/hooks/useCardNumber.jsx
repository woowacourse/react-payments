import { useState, useCallback } from 'react';

import { RULE } from '../constants';

export default function useCardNumber(initialValue) {
  const [cardNumber, setCardNumber] = useState(initialValue);
  const [encryptedCardNumber, setEncryptedCardNumber] = useState(initialValue);

  const handler = useCallback(({ target: { value } }) => {
    const numbers = value.replaceAll('-', '');
    if (numbers.length > RULE.CARD_NUMBER_MAX_LENGTH) return;

    setCardNumber(numbers);

    let encryptedNumbers = numbers;

    if (numbers.length > 8) {
      encryptedNumbers = numbers.slice(0, 8) + '•'.repeat(numbers.length - 8);
    }

    // 정규식: 숫자와 • 4개 단위마다 '-'를 넣어준다.
    setEncryptedCardNumber(
      encryptedNumbers.match(/[\d•]{1,4}/g)?.join('-') ?? initialValue
    );
  }, []);

  return [cardNumber, handler, encryptedCardNumber];
}

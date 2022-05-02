import { useState, useCallback } from 'react';

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

    // 정규식: 숫자와 • 4개 단위마다 '-'를 넣어준다.
    setEncryptedCardNumber(
      processedNumbers.match(/[\d•]{1,4}/g)?.join('-') ?? initialValue
    );
  }, []);

  return [cardNumber, handler, encryptedCardNumber];
}

import { useState, useCallback } from 'react';

import { RULE } from 'constants';

// TODO: refactor
export default function useCardNumber(initialValue) {
  const [cardNumber, setCardNumber] = useState(initialValue);
  const [encryptedCardNumber, setEncryptedCardNumber] = useState(initialValue);

  const getComputedValue = (selectionStart, type = 'delete') => {
    const auxilaryNum = type === 'add' && 1;

    if (0 <= selectionStart && selectionStart <= 4 + auxilaryNum) return 0;
    if (4 + auxilaryNum < selectionStart && selectionStart <= 9 + auxilaryNum)
      return 1;
    if (9 + auxilaryNum < selectionStart && selectionStart <= 14 + auxilaryNum)
      return 2;
    if (14 + auxilaryNum < selectionStart && selectionStart <= 19) return 3;
  };

  const getNumbers = (data, selectionStart) => {
    // TODO: 값 삭제시 커서 맨 끝으로 가는 거 수정하기
    if (data === null) {
      const computedValue = getComputedValue(selectionStart);
      return (
        cardNumber.slice(0, selectionStart - computedValue) +
        cardNumber.slice(selectionStart - computedValue + 1)
      );
    }

    if (!data.match(/[\d]/g)) return cardNumber;

    const computedValue = getComputedValue(selectionStart, 'add');

    return (
      // -1을 해주는 이유는, onchage가 일어나면 이미 e.targe.value는 추가된 값이 들어오고, 당연히 selectionStart도 하나 늘어난 채로 들어오게 된다. 이로 인해, 추가할때는 -1을 해줘야함
      cardNumber.slice(0, selectionStart - computedValue - 1) +
      data +
      cardNumber.slice(selectionStart - computedValue - 1)
    );
  };

  const getEncrytedNumbers = numbers => {
    let encryptedNumbers = numbers;

    if (numbers.length > 8) {
      encryptedNumbers = numbers.slice(0, 8) + '•'.repeat(numbers.length - 8);
    }

    return encryptedNumbers.match(/[\d•]{1,4}/g)?.join('-') ?? initialValue;
  };

  const handler = useCallback(
    e => {
      const { value, selectionStart } = e.target;
      const trimmedValue = value.replaceAll('-', '');

      if (trimmedValue.length > RULE.CARD_NUMBER_MAX_LENGTH) return;

      const { data } = e.nativeEvent;

      const numbers = getNumbers(data, selectionStart);
      setCardNumber(numbers);

      const encryptedNumbers = getEncrytedNumbers(numbers);
      setEncryptedCardNumber(encryptedNumbers);
    },
    [cardNumber]
  );

  return [cardNumber, handler, encryptedCardNumber];
}

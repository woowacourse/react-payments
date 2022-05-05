import { useState, useCallback } from 'react';

import { splitCardNumbers } from '../utils/regExp';

export default function useCardNumber(initialValue) {
  const [cardNumber, setCardNumber] = useState(initialValue);
  const [encryptedCardNumber, setEncryptedCardNumber] = useState(initialValue);

  const handler = useCallback(
    ({ target: { selectionStart }, nativeEvent: { data: key } }) => {
      setCardNumber(prevState => {
        let state = key && /[0-9]/.test(key) ? prevState + key : prevState;

        if (!key) {
          let removeIdx = 0;

          if (selectionStart < 4) {
            removeIdx = selectionStart;
          } else if (selectionStart < 9) {
            removeIdx = selectionStart - 1;
          } else if (selectionStart < 14) {
            removeIdx = selectionStart - 2;
          } else if (selectionStart < 19) {
            removeIdx = selectionStart - 3;
          }

          state =
            prevState.slice(0, removeIdx) +
            prevState.slice(removeIdx + 1, prevState.length);
        }

        const processedNumbers =
          state.length > 8
            ? state.slice(0, 8) + '•'.repeat(state.length - 8)
            : state;

        setEncryptedCardNumber(
          splitCardNumbers(processedNumbers, '-') ?? initialValue
        );

        return state;
      });
    },
    []
  );

  return { cardNumber, handler, encryptedCardNumber };
}

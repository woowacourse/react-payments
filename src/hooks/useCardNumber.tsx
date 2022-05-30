import React, { useCallback, useState } from 'react';
import { isNumber, splitCardNumbers } from 'utils/regExp';

import { encryptCardNumber } from 'utils/processCard';

export default function useCardNumber(initialValue: string) {
  const [cardNumber, setCardNumber] = useState(initialValue);

  const handler = useCallback(
    async ({ target, nativeEvent }: React.ChangeEvent<HTMLInputElement>) => {
      const selectionStart = target.selectionStart as number;
      const key = (nativeEvent as InputEvent).data;

      await setCardNumber(prevState => {
        const insertIdx =
          selectionStart -
          selectionStart / 5 -
          (selectionStart % 5 !== 0 ? 1 : 0);

        let state =
          key && isNumber(key)
            ? prevState.slice(0, insertIdx) +
              key +
              prevState.slice(insertIdx, prevState.length)
            : prevState;

        if (!key) {
          const removeIdx = selectionStart - selectionStart / 5;

          state =
            prevState.slice(0, removeIdx) +
            prevState.slice(removeIdx + 1, prevState.length);
        }

        return state;
      });

      const cursor = selectionStart + (selectionStart % 5 === 0 && key ? 1 : 0);

      await target.setSelectionRange(cursor, cursor);
    },
    []
  );

  return {
    cardNumber: splitCardNumbers(encryptCardNumber(cardNumber), ' ') ?? '',
    setCardNumber: handler,
  };
}

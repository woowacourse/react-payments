import { useState, useCallback } from 'react';

import { isNumber } from '../utils/regExp';

export default function useCardNumber(initialValue) {
  const [cardNumber, setCardNumber] = useState(initialValue);

  const handler = useCallback(
    async ({ target, nativeEvent: { data: key } }) => {
      const { selectionStart } = target;

      await setCardNumber(prevState => {
        const insertIdx =
          selectionStart -
          parseInt(selectionStart / 5, 10) -
          (selectionStart % 5 !== 0 ? 1 : 0);

        let state =
          key && isNumber(key)
            ? prevState.slice(0, insertIdx) +
              key +
              prevState.slice(insertIdx, prevState.length)
            : prevState;

        if (!key) {
          const removeIdx = selectionStart - parseInt(selectionStart / 5, 10);

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

  return [cardNumber, handler];
}

import { useState, useCallback } from 'react';

import { isNumber } from '../utils/regExp';

export default function useCardNumber(initialValue) {
  const [cardNumber, setCardNumber] = useState(initialValue);

  const handler = useCallback(
    async ({ target, nativeEvent: { data: key } }) => {
      const { selectionStart } = target;

      await setCardNumber(prevState => {
        let state =
          key && isNumber(key)
            ? prevState.slice(0, selectionStart - 1) +
              key +
              prevState.slice(selectionStart - 1, prevState.length)
            : prevState;

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

        return state;
      });

      await target.setSelectionRange(selectionStart, selectionStart);
    },
    []
  );

  return [cardNumber, handler];
}

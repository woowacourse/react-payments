import { useState, useCallback } from 'react';

import { isValidOwnerName } from '../utils/regExp';

export default function useCardOwnerName(initialValue) {
  const [cardOwnerName, setCardOwnerName] = useState(initialValue);

  const handler = useCallback(({ target: { value } }) => {
    if (!isValidOwnerName(value)) return;

    setCardOwnerName(value.toUpperCase());
  }, []);

  return [cardOwnerName, handler];
}

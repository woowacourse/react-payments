import { useState, useCallback } from 'react';

export default function useCardOwnerName(initialValue) {
  const [cardOwnerName, setCardOwnerName] = useState(initialValue);

  const handler = useCallback(({ target: { value } }) => {
    if (value.length <= 30) {
      setCardOwnerName(value);
    }
  }, []);

  return [cardOwnerName, handler];
}

import { useState, useCallback } from 'react';

import CARD_RULE from '../constants';

export default function useCardOwnerName(initialValue) {
  const [cardOwnerName, setCardOwnerName] = useState(initialValue);

  const handler = useCallback(({ target: { value } }) => {
    if (value.length <= CARD_RULE.CARD_OWNER_NAME_MAX_LENGTH) {
      setCardOwnerName(value);
    }
  }, []);

  return [cardOwnerName, handler];
}

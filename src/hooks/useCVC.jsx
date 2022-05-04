import { useState, useCallback } from 'react';

import { isValidCVC } from '../utils/regExp';

export default function useCVC(initialValue) {
  const [CVC, setCVC] = useState(initialValue);

  const handler = useCallback(({ target: { value } }) => {
    if (!isValidCVC(value)) return;

    setCVC(value);
  }, []);

  return [CVC, handler];
}

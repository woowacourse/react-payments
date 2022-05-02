import { useState, useCallback } from 'react';

import { isValidPassword } from '../utils/regExp';

export default function useCardPassword(initialValue) {
  const [password, setPassword] = useState(initialValue);

  const handler = useCallback(({ target: { value } }) => {
    if (!isValidPassword(value)) return;

    setPassword(value);
  }, []);

  return [password, handler];
}

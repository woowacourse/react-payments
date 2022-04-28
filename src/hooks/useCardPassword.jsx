import { useState, useCallback } from 'react';

export default function useCardPassword(initialValue) {
  const [password, setPassword] = useState(initialValue);

  const handler = useCallback(({ target: { value } }) => {
    if (!/^$|^[0-9]{0,1}$/.test(value)) return;

    setPassword(value);
  }, []);

  return [password, handler];
}

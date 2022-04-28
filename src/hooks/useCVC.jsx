import { useState, useCallback } from 'react';

export default function useCVC(initialValue) {
  const [CVC, setCVC] = useState(initialValue);

  const handler = useCallback(({ target: { value } }) => {
    if (!/^$|^[0-9]{0,3}$/.test(value)) return;

    setCVC(value);
  }, []);

  return [CVC, handler];
}

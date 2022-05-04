import { useState, useCallback } from 'react';

import { isValidDate } from '../utils/regExp';

export default function useValidDate(initialValue) {
  const [validDate, setValidDate] = useState(initialValue);

  const handler = useCallback(({ target: { value } }) => {
    if (value.slice(-1) === '/' && value.length !== 3) return;
    if (!isValidDate(value)) return;

    if (value.length === 3) {
      if (value.includes('/')) {
        setValidDate(value.replace('/', ''));

        return;
      }

      setValidDate(`${value.slice(0, 2)}/${value.slice(2, 3)}`);

      return;
    }

    setValidDate(value);
  }, []);

  return [validDate, handler];
}

import { useCallback, useState } from 'react';

export default function useInput(initialState) {
  const [value, setValue] = useState(initialState);

  const handler = useCallback(({ target: { value: text } }) => {
    setValue(text);
  }, []);

  return [value, handler];
}

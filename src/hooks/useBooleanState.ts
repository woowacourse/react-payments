import { useState } from 'react';

export default function useBooleanState(initialValue: boolean) {
  const [value, setValue] = useState(initialValue);

  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  const toggle = () => setValue(prev => !prev);

  return { value, setTrue, setFalse, toggle };
}

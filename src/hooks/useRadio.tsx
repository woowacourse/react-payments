import { useState } from 'react';

export default function useRadio<T>(options: T[]) {
  const [value, setValue] = useState<T | ''>('');
  const initValue = () => setValue('');
  const onMouseDowns = options.map(string => {
    return () => {
      setValue(string);
    };
  });

  return { value, onMouseDowns, initValue };
}

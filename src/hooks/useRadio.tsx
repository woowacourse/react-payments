import { useState } from 'react';

export default function useRadio<T>(options: T[]) {
  const [value, setValue] = useState<T | ''>('');
  const initValue = () => setValue('');
  const onClicks = options.map(string => {
    return () => {
      setValue(string);
    };
  });

  return { value, onClicks, initValue };
}

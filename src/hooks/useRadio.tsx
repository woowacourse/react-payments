import { useState } from 'react';

export default function useRadio<T>(options: T[]) {
  const [value, setValue] = useState<T | ''>('');
  const onClicks = options.map(string => {
    return () => {
      setValue(string);
      console.log(string);
    };
  });

  return { value, onClicks };
}

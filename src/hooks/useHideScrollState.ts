import { useEffect, useState } from 'react';

export const useHideScrollState = <Type>(
  initializeValue: Type,
  predicate: (state: Type) => boolean
): [value: Type, setValue: (newValue: Type) => void] => {
  const [value, setState] = useState(initializeValue);

  const setValue = (newValue: Type) => {
    setState(newValue);
  };

  useEffect(() => {
    document.body.dataset.hideScroll = predicate(value) ? 'true' : 'false';

    return () => {
      document.body.dataset.hideScroll = 'false';
    };
  }, [value, predicate]);

  return [value, setValue];
};

import { useState } from 'react';

const useExpirationDate = (initialState = { year: 'YY', month: 'MM' }) => {
  const [expirationDate, setValue] = useState(initialState);
  const setExpirationDate = (index: number, value: string) => {
    if (index === 0) {
      setValue(prev => ({ ...prev, month: value }));
    }
    if (index === 1) {
      setValue(prev => ({ ...prev, year: value }));
    }
  };

  return { expirationDate, setExpirationDate };
};

export default useExpirationDate;

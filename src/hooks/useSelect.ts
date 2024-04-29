import { useState } from 'react';
import { UseSelectReturnType } from '../types/hooks';

const useSelect = <T>(initialValue: T): UseSelectReturnType<T> => {
  const [value, setValue] = useState<T>(initialValue);

  const handleSelect = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    if (!target.dataset.value) return;
    const data = target.dataset.value as T;
    setValue(data);
  };

  return {
    value,
    handleSelect,
  };
};

export default useSelect;

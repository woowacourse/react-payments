import { useState } from 'react';

const useSelect = <T>(initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);

  const handleChange = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    if (!target.dataset.value) return;
    const data = target.dataset.value as T;
    setValue(data);
  };

  return {
    value,
    handleChange,
  };
};

export default useSelect;

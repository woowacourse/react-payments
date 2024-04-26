import { useState } from 'react';

const useSelect = (defaultValue: string | null) => {
  const [value, setValue] = useState<string | null>(defaultValue);
  const clear = () => {
    setValue(null);
  };

  return {
    value,
    onChange: setValue,
    clear,
  };
};

export default useSelect;

import { useState } from 'react';

const useSelect = (defaultValue: string | null) => {
  const [value, setValue] = useState<string | null>(defaultValue);

  return {
    value,
    onChange: setValue,
  };
};

export default useSelect;

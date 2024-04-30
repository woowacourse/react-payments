import { useState } from 'react';

const useSelect = (defaultValue: string | null) => {
  const [value, setValue] = useState<string | null>(defaultValue);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  const clear = () => {
    setValue(null);
  };

  return {
    value,
    onChange,
    clear,
  };
};

export default useSelect;

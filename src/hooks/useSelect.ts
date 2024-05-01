import { useState } from 'react';

const useSelect = (defaultValue: string) => {
  const [value, setValue] = useState<string>(defaultValue);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  const clear = () => {
    setValue('');
  };

  return {
    value,
    onChange,
    clear,
  };
};

export default useSelect;

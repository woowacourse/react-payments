import { useState } from 'react';

export type SelectChangeParams = {
  value: string;
};

export function useSelect(
  initialValue: string = ''
): [string, (params: SelectChangeParams) => void] {
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const handleSelect = ({ value }: SelectChangeParams) => {
    setSelectedValue(value);
  };

  return [selectedValue, handleSelect];
}

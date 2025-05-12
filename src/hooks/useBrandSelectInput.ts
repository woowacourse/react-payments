import { useState } from 'react';

export const useBrandSelectInput = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemSelect = (value: string) => {
    setSelectedItem(value);
  };

  return { selectedItem, handleItemSelect };
};

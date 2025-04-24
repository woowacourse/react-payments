import { useState } from 'react';

export const useBrandSelectInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemSelect = (value: string) => {
    setSelectedItem(value);
    setIsOpen(false);
  };

  const handleToggleSelect = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, selectedItem, handleItemSelect, handleToggleSelect };
};

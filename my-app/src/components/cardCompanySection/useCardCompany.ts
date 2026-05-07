import { useState } from 'react';
import type { CardCompany } from './CardCompanyConstants';

interface Props {
  value: CardCompany | '';
  setValue: (value: CardCompany) => void;
}

export const useCardCompany = ({ setValue }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleChooseCompany = (cardCompany: CardCompany) => {
    setValue(cardCompany);
    setIsOpen(false);
  };

  return {
    isOpen,
    toggleDropdown,
    handleChooseCompany,
  };
};

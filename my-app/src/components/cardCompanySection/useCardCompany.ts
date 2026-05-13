import { useState } from 'react';
import type { CardCompany } from './CardCompanyConstants';

interface Props {
  setValue: (value: CardCompany) => void;
}

export const useCardCompany = ({ setValue }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleChooseCompany = (cardCompany: CardCompany) => {
    setValue(cardCompany);
    setIsOpen(false);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLElement>,
    company: CardCompany,
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleChooseCompany(company);
    }
    if (e.key === 'Escape') {
      e.preventDefault();
      setIsOpen(false);
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      (e.currentTarget.nextElementSibling as HTMLElement)?.focus();
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      (e.currentTarget.previousElementSibling as HTMLElement)?.focus();
    }
  };

  return {
    isOpen,
    toggleDropdown,
    handleChooseCompany,
    handleKeyDown,
  };
};

import { useState } from 'react';

import useToggle from '@hooks/useToggle';

import { CardBrand } from '@components/payments/@cardBrand/CardBrandDropdown/CardBrandDropdown.type';

const useCardBrandDropdown = () => {
  const [cardBrand, setCardBrand] = useState<CardBrand | ''>('');
  const [isCardBrandCompleted, setIsCardBrandCompleted] = useState(false);

  const handleSelectCardBrand = (card: CardBrand) => {
    setCardBrand(card);
    setIsCardBrandCompleted(true);
  };

  const { isOpen, handleToggle } = useToggle();

  return { isCardBrandCompleted, cardBrand, handleSelectCardBrand, isOpen, handleToggle };
};

export default useCardBrandDropdown;

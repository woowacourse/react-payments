import { useState } from 'react';

import { CardBrand } from '@components/payments/CardBrandDropdown/CardBrandDropdown.type';

import useToggle from '@hooks/useToggle';

const useCardBrandDropdown = () => {
  const [cardBrand, setCardBrand] = useState<CardBrand | ''>('');

  const handleSelectCardBrand = (card: CardBrand) => setCardBrand(card);

  const { isOpen, handleToggle } = useToggle();

  return { cardBrand, handleSelectCardBrand, isOpen, handleToggle };
};

export default useCardBrandDropdown;

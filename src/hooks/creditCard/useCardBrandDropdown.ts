import { useState } from 'react';

import { CardBrand } from '@components/payments/@cardRegister/@cardBrand/CardBrandDropdown/CardBrandDropdown.type';
import useToggle from '@hooks/useToggle';

const useCardBrandDropdown = () => {
  const [cardBrand, setCardBrand] = useState<CardBrand | ''>('');
  const [isCardBrandCompleted, setIsCardBrandCompleted] = useState(false);

  const { isToggle, handleToggle } = useToggle(true);

  const handleSelectCardBrand = (card: CardBrand) => {
    setCardBrand(card);
    setIsCardBrandCompleted(true);
  };

  return { isCardBrandCompleted, cardBrand, handleSelectCardBrand, isDropdownOpen: isToggle, handleToggle };
};

export default useCardBrandDropdown;

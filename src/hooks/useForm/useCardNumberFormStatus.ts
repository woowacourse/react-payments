import { useEffect, useState } from 'react';
import { isValidCardNumberForm } from '../../validator/validateForm';
import { UseCardNumberReturnType } from '../../types/hooks';

const useCardNumberFormStatus = (cardNumberInfo: UseCardNumberReturnType) => {
  const isCardNumberValid = isValidCardNumberForm(cardNumberInfo);
  const [cardNumberFormStatus, setCardNumberFormStatus] = useState({
    isValid: isCardNumberValid,
    isOpen: false,
  });

  useEffect(() => {
    setCardNumberFormStatus(prev => ({ ...prev, isValid: isCardNumberValid }));

    if (isCardNumberValid) {
      setCardNumberFormStatus(prev => ({ ...prev, isOpen: true }));
    }
  }, [isCardNumberValid]);

  return cardNumberFormStatus;
};

export default useCardNumberFormStatus;

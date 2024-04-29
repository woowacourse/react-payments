import { useEffect, useState } from 'react';
import { isValidCardNumberForm } from '../../validator/validateForm';
import { UseCardNumberReturnType } from '../../types/hooks';

const useCardNumberFormStatus = (cardNumberInfo: UseCardNumberReturnType) => {
  const isCardNumberValid = isValidCardNumberForm(cardNumberInfo);
  const [cardNumberFormStatus, setCardNumberFormStatus] = useState({
    isValid: isCardNumberValid,
    hasOpened: false,
  });

  useEffect(() => {
    setCardNumberFormStatus(prev => ({
      ...prev,
      isValid: isCardNumberValid,
      hasOpened: isCardNumberValid || prev.hasOpened,
    }));
  }, [isCardNumberValid]);

  return cardNumberFormStatus;
};

export default useCardNumberFormStatus;

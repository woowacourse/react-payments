import { useEffect, useState } from 'react';
import { isValidPasswordForm } from '../../validator/validateForm';
import { UseCardPasswordReturnType } from '../../types/hooks';

const useCardPasswordFormStatus = (cardPasswordInfo: UseCardPasswordReturnType) => {
  const isCardPasswordValid = isValidPasswordForm(cardPasswordInfo);
  const [cardholderNameFormStatus, setCardholderNameFormStatus] = useState({
    isValid: isCardPasswordValid,
    isOpen: false,
  });

  useEffect(() => {
    setCardholderNameFormStatus(prev => ({ ...prev, isValid: isCardPasswordValid }));

    if (isCardPasswordValid) {
      setCardholderNameFormStatus(prev => ({ ...prev, isOpen: true }));
    }
  }, [isCardPasswordValid]);

  return cardholderNameFormStatus;
};

export default useCardPasswordFormStatus;

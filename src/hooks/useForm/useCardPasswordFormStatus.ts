import { useEffect, useState } from 'react';
import { isValidPasswordForm } from '../../validator/validateForm';
import { UseCardPasswordReturnType } from '../../types/hooks';

const useCardPasswordFormStatus = (cardPasswordInfo: UseCardPasswordReturnType) => {
  const isCardPasswordValid = isValidPasswordForm(cardPasswordInfo);
  const [cardPasswordFormStatus, setCardPasswordFormStatus] = useState({
    isValid: isCardPasswordValid,
    isOpen: false,
  });

  useEffect(() => {
    setCardPasswordFormStatus(prev => ({
      ...prev,
      isOpen: isCardPasswordValid || prev.isOpen,
    }));
  }, [isCardPasswordValid]);

  return cardPasswordFormStatus;
};

export default useCardPasswordFormStatus;

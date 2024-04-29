import { useEffect, useState } from 'react';
import { isValidPasswordForm } from '../../validator/validateForm';
import { UseCardPasswordReturnType } from '../../types/hooks';

const useCardPasswordFormStatus = (cardPasswordInfo: UseCardPasswordReturnType) => {
  const isCardPasswordValid = isValidPasswordForm(cardPasswordInfo);
  const [cardPasswordFormStatus, setCardPasswordFormStatus] = useState({
    isValid: isCardPasswordValid,
    hasOpened: false,
  });

  useEffect(() => {
    setCardPasswordFormStatus(prev => ({
      ...prev,
      isValid: isCardPasswordValid,
      hasOpened: isCardPasswordValid || prev.hasOpened,
    }));
  }, [isCardPasswordValid]);

  return cardPasswordFormStatus;
};

export default useCardPasswordFormStatus;

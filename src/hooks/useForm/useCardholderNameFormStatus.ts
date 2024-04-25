import { useEffect, useState } from 'react';
import { isValidCardholderNameForm } from '../../validator/validateForm';
import { UseCardholderNameReturnType } from '../../types/hooks';

const useCardholderNameFormStatus = (cardholderNameInfo: UseCardholderNameReturnType) => {
  const isCardholderNameValid = isValidCardholderNameForm(cardholderNameInfo);
  const [cardholderNameFormStatus, setCardholderNameFormStatus] = useState({
    isValid: isCardholderNameValid,
    isOpen: false,
  });

  useEffect(() => {
    setCardholderNameFormStatus(prev => ({ ...prev, isValid: isCardholderNameValid }));

    if (isCardholderNameValid) {
      setCardholderNameFormStatus(prev => ({ ...prev, isOpen: true }));
    }
  }, [isCardholderNameValid]);

  return cardholderNameFormStatus;
};

export default useCardholderNameFormStatus;

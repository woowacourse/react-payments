import { useEffect, useState } from 'react';
import { isValidCVCForm } from '../../validator/validateForm';
import { UseCVCReturnType } from '../../types/hooks';

const useCVCFormStatus = (cardCVCInfo: UseCVCReturnType) => {
  const isCardCVCValid = isValidCVCForm(cardCVCInfo);
  const [cardholderNameFormStatus, setCardholderNameFormStatus] = useState({
    isValid: isCardCVCValid,
    isOpen: false,
  });

  useEffect(() => {
    setCardholderNameFormStatus(prev => ({ ...prev, isValid: isCardCVCValid }));

    if (isCardCVCValid) {
      setCardholderNameFormStatus(prev => ({ ...prev, isOpen: true }));
    }
  }, [isCardCVCValid]);

  return cardholderNameFormStatus;
};

export default useCVCFormStatus;

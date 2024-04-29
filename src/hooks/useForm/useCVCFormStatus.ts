import { useEffect, useState } from 'react';
import { isValidCVCForm } from '../../validator/validateForm';
import { UseCVCReturnType } from '../../types/hooks';

const useCVCFormStatus = (cardCVCInfo: UseCVCReturnType) => {
  const isCardCVCValid = isValidCVCForm(cardCVCInfo);
  const [cardCVCFormStatus, setCardCVCFormFormStatus] = useState({
    isValid: isCardCVCValid,
    isOpen: false,
  });

  useEffect(() => {
    setCardCVCFormFormStatus(prev => ({
      ...prev,
      isValid: isCardCVCValid,
      isOpen: isCardCVCValid || prev.isOpen,
    }));
  }, [isCardCVCValid]);

  return cardCVCFormStatus;
};

export default useCVCFormStatus;

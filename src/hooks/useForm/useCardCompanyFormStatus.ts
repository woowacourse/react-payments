import { useEffect, useState } from 'react';
import { isValidCardCompanyForm } from '../../validator/validateForm';
import { UseSelectReturnType } from '../../types/hooks';
import { CardType } from '../../types/card';

const useCardCompanyFormStatus = (cardCompanyInfo: UseSelectReturnType<CardType>) => {
  const isCardCompanyValid = isValidCardCompanyForm(cardCompanyInfo);
  const [cardCompanyFormStatus, setCardCompanyFormStatus] = useState({
    isValid: isCardCompanyValid,
    hasOpened: false,
  });

  useEffect(() => {
    setCardCompanyFormStatus(prev => ({
      ...prev,
      isValid: isCardCompanyValid,
      hasOpened: isCardCompanyValid || prev.hasOpened,
    }));
  }, [isCardCompanyValid]);

  return cardCompanyFormStatus;
};

export default useCardCompanyFormStatus;

import { useEffect, useState } from 'react';
import { isValidCardCompanyForm } from '../../validator/validateForm';
import { UseSelectReturnType } from '../../types/hooks';
import { CARD_TYPE } from '../../types/card';

const useCardCompanyFormStatus = (cardCompanyInfo: UseSelectReturnType<CARD_TYPE>) => {
  const isCardCompanyValid = isValidCardCompanyForm(cardCompanyInfo);
  const [cardCompanyFormStatus, setCardCompanyFormStatus] = useState({
    isValid: isCardCompanyValid,
    isOpen: false,
  });

  useEffect(() => {
    setCardCompanyFormStatus(prev => ({ ...prev, isValid: isCardCompanyValid }));

    if (isCardCompanyValid) {
      setCardCompanyFormStatus(prev => ({ ...prev, isOpen: true }));
    }
  }, [isCardCompanyValid]);

  return cardCompanyFormStatus;
};

export default useCardCompanyFormStatus;

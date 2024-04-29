import { useEffect, useState } from 'react';
import { isValidExpiryDateForm } from '../../validator/validateForm';
import { UseExpiryDateReturnType } from '../../types/hooks';

const useExpiryDateFormStatus = (expiryDateInfo: {
  month: UseExpiryDateReturnType;
  year: UseExpiryDateReturnType;
}) => {
  const isExpiryDateValid = isValidExpiryDateForm(expiryDateInfo);
  const [expiryDateFormStatus, setExpiryDateFormStatus] = useState({
    isValid: isExpiryDateValid,
    hasOpened: false,
  });

  useEffect(() => {
    setExpiryDateFormStatus(prev => ({
      ...prev,
      isValid: isExpiryDateValid,
      hasOpened: isExpiryDateValid || prev.hasOpened,
    }));
  }, [isExpiryDateValid]);

  return expiryDateFormStatus;
};

export default useExpiryDateFormStatus;

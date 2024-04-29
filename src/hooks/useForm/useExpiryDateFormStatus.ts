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
    isOpen: false,
  });

  useEffect(() => {
    setExpiryDateFormStatus(prev => ({
      ...prev,
      isValid: isExpiryDateValid,
      isOpen: isExpiryDateValid || prev.isOpen,
    }));
  }, [isExpiryDateValid]);

  return expiryDateFormStatus;
};

export default useExpiryDateFormStatus;

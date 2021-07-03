import { useState } from 'react';

import { useCardCompany } from './useCardCompany';
import { useCardNumbers } from './useCardNumbers';
import { useExpiration } from './useExpiration';
import { useOwnerName } from './useOwnerName';
import { usePassword } from './usePassword';
import { useSecurityCode } from './useSecurityCode';

export const usePayments = () => {
  const { cardNumbers } = useCardNumbers();
  const { cardCompany } = useCardCompany();
  const { expiration } = useExpiration();
  const { ownerName } = useOwnerName();
  const { securityCode } = useSecurityCode();
  const { password } = usePassword();

  const [isAllValid, setIsAllValid] = useState(false);
  const [cardName, setCardName] = useState('');

  const resetState = () => {
    setIsAllValid(false);
  };

  const handleCardInfoSubmit = (e) => {
    e.preventDefault();

    setIsAllValid(true);
  };

  return {
    cardNumbers,
    cardCompany,
    expiration,
    ownerName,
    securityCode,
    password,
    isAllValid,
    setIsAllValid,
    setCardName,
    resetState,
    handleCardInfoSubmit,
  };
};

import { useState } from 'react';
import useFormField from './useFormField';

const INPUTARRAY_LENGTH = {
  CARD_NUMBER: 4,
  EXPIRATION: 2,
  CVC: 1,
  PASSWORD: 1,
};

function useCardForm() {
  const cardNumber = useFormField(INPUTARRAY_LENGTH.CARD_NUMBER);
  const expirationDate = useFormField(INPUTARRAY_LENGTH.EXPIRATION);
  const cvc = useFormField(INPUTARRAY_LENGTH.CVC);
  const password = useFormField(INPUTARRAY_LENGTH.PASSWORD);

  const [cardCompany, setCardCompany] = useState('');

  const handleCardCompanySelect = (value: string) => {
    setCardCompany(value);
  };

  const getIsAllFormValid = () => {
    return cardNumber.isValid && expirationDate.isValid && cvc.isValid && password.isValid;
  };

  return {
    cardNumber,
    expirationDate,
    cvc,
    password,
    cardCompany,
    handleCardCompanySelect,
    isFormValid: getIsAllFormValid(),
  };
}

export default useCardForm;

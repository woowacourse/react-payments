import { useCardNumbersFocus, useCardNumbersState, useCardNumbersValidation } from './useCardNumbersState';
import { useExpirationFocus, useExpirationState, useExpirationValidation } from './useExpirationState';
import useCompany from './useCompany';
import useCvc from './useCvc';
import usePassword from './usePassword';
import { CardNumberType, ExpirationKey } from '../types';
import { isNumber } from '../utils/isNumber';

const useValues = () => {
  const { cardNumbers, setCardNumbers } = useCardNumbersState();
  const { inputRefs: cardInputRefs, focusIfNeeded: cardNumberFocusIfNeeded } = useCardNumbersFocus();
  const { validate: validateCardNumbers } = useCardNumbersValidation();

  const { expiration, setExpiration } = useExpirationState();
  const { expirationRef, focusIfNeeded: expirationFocusIfNeeded } = useExpirationFocus();
  const { validate: validateExpiration } = useExpirationValidation();

  const { company, handleCompanySelect } = useCompany();
  const { cvc, handleCvcChange } = useCvc();
  const { password, handlePasswordChange } = usePassword();

  const handleCardNumbersChange = (field: keyof CardNumberType, value: string) => {
    if (value !== '' && !isNumber(value)) return;

    setCardNumbers((prev) => ({
      ...prev,
      [field]: { value, errorMessage: !validateCardNumbers(value) }
    }));

    cardNumberFocusIfNeeded(field, value);
  };

  const handleExpirationChange = (field: ExpirationKey, value: string) => {
    if (!isNumber(value) && value !== '') return;

    const errorMessage = validateExpiration(field, value);
    expirationFocusIfNeeded(field, value);

    setExpiration((prev) => ({
      ...prev,
      [field]: { value, errorMessage }
    }));
  };

  return {
    preview: {
      cardNumbers,
      expiration,
      company
    },
    cardForm: {
      cardNumbers: {
        cardNumbers,
        onCardNumbersChange: handleCardNumbersChange,
        cardInputRefs
      },

      company: {
        company,
        handleCompanySelect
      },

      expiration: {
        expiration,
        expirationRef,
        handleExpirationChange
      },

      cvc: { cvc, handleCvcChange },

      password: { password, handlePasswordChange }
    }
  };
};

export default useValues;

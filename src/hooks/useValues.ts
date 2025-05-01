import { getCardNumbersErrorMessage } from '../validation/validateCardNumbers';
import { useCardNumbersState } from './cardNumbers/useCardNumbersState';
import { useExpirationState } from './expiration/useExpirationState';
import useCompany from './useCompany';
import useCvc from './useCvc';
import usePassword from './usePassword';

const useValues = () => {
  const { handleCardNumbersChange, cardNumbers, inputRefs: cardInputRefs } = useCardNumbersState();
  const { expiration, handleExpirationChange, expirationRef } = useExpirationState();
  const { company, handleCompanySelect } = useCompany();
  const { cvc, handleCvcChange } = useCvc();
  const { password, handlePasswordChange } = usePassword();

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

import useCardNumbers from './useCardNumbers';
import useCompany from './useCompany';
import useCvc from './useCvc';
import useExpiration from './useExpiration';
import usePassword from './usePassword';

const useValues = () => {
  const { cardInputRefs, handleCardNumbersChange, cardNumbers, getCardNumberErrorMessage } = useCardNumbers();
  const { expiration, handleExpirationChange, expirationRef } = useExpiration();
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
        cardInputRefs,
        getCardNumberErrorMessage
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

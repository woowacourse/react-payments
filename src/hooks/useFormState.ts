import useCardNumbers from './useCardNumbers';
import useCompany from './useCompany';
import useCvc from './useCvc';
import useExpiration from './useExpiration';
import usePassword from './usePassword';

export function useFormState() {
  const { cardNumbers, handleCardNumbersChange, cardInputRefs, getCardNumberErrorMessage } = useCardNumbers();
  const { expiration, handleExpirationChange, expirationRef } = useExpiration();
  const { company, handleCompanySelect, companyRef } = useCompany();
  const { cvc, handleCvcChange, cvcRef } = useCvc();
  const { password, handlePasswordChange, passwordRef } = usePassword();

  return {
    cardNumbers,
    onCardNumbersChange: handleCardNumbersChange,
    cardInputRefs,
    getCardNumberErrorMessage,

    expiration,
    handleExpirationChange,
    expirationRef,

    company,
    handleCompanySelect,
    componyRef: companyRef,

    cvc,
    handleCvcChange,
    cvcRef,

    password,
    handlePasswordChange,
    passwordRef
  };
}

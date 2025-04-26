import useCardNumbers from './useCardNumbers';
import useCompany from './useCompany';
import useCvc from './useCvc';
import useExpiration from './useExpiration';
import usePassword from './usePassword';

export function useFormState() {
  const { cardNumbers, handleCardNumbersChange, cardInputRefs, getCardNumberErrorMessage } = useCardNumbers();
  const { expiration, handleExpirationChange, expirationRef } = useExpiration();
  const { company, handleCompanySelect } = useCompany();
  const { cvc, handleCvcChange } = useCvc();
  const { password, handlePasswordChange } = usePassword();

  return {
    // 이름 바꿔주기
    cardNumbers,
    onCardNumbersChange: handleCardNumbersChange,
    cardInputRefs,
    getCardNumberErrorMessage,

    expiration,
    handleExpirationChange,
    expirationRef,

    company,
    handleCompanySelect,

    cvc,
    handleCvcChange,

    password,
    handlePasswordChange
  };
}

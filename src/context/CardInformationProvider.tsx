import { createContext, useMemo } from 'react';
import useCardForm from '../hooks/useCardForm';
import useWrappingContext from '../hooks/useWrappingContext';

export const CardInformationStore = createContext<ReturnType<typeof useCardForm> | null>(null);

export const useCardInformationStore = () => useWrappingContext(CardInformationStore);

export function CardInformationProvider({ children }: { children: React.ReactNode }) {
  const {
    card,
    checkValidator,
    errorMessage,
    isVisited,
    setCardName,
    setBankName,
    setCardNumber,
    setExpirationDate,
    setOwner,
    setPassword,
    setSecurityCode,
    resetCardInformation,
    resetValidateForm,
  } = useCardForm();

  const value = useMemo(
    () => ({
      card,
      checkValidator,
      errorMessage,
      isVisited,
      setCardName,
      setBankName,
      setCardNumber,
      setExpirationDate,
      setOwner,
      setPassword,
      setSecurityCode,
      resetCardInformation,
      resetValidateForm,
    }),
    [
      card,
      checkValidator,
      errorMessage,
      isVisited,
      setCardName,
      setBankName,
      setCardNumber,
      setExpirationDate,
      setOwner,
      setPassword,
      setSecurityCode,
      resetCardInformation,
      resetValidateForm,
    ],
  );
  return <CardInformationStore.Provider value={value}>{children}</CardInformationStore.Provider>;
}

export default CardInformationStore;

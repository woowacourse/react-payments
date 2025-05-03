import { createContext, useContext } from 'react';
import { useCardNumbers } from '../hooks/useCardNumbers';
import useExpiryDate from '../hooks/useExpiry';
import useCVCNumber from '../hooks/useCVC';
import useCardBrand from '../hooks/useCardBrand';
import usePassword from '../hooks/usePassword';

type CardFormContextType = {
  cardNumbers: ReturnType<typeof useCardNumbers>;
  expiryDate: ReturnType<typeof useExpiryDate>;
  CVCNumber: ReturnType<typeof useCVCNumber>;
  cardBrand: ReturnType<typeof useCardBrand>;
  password: ReturnType<typeof usePassword>;
};

const CardFormContext = createContext<CardFormContextType | null>(null);

export const CardFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const cardNumbers = useCardNumbers();
  const expiryDate = useExpiryDate();
  const CVCNumber = useCVCNumber();
  const cardBrand = useCardBrand();
  const password = usePassword();

  const value = {
    cardNumbers,
    expiryDate,
    CVCNumber,
    cardBrand,
    password,
  };

  return (
    <CardFormContext.Provider value={value}>
      {children}
    </CardFormContext.Provider>
  );
};

export const useCardFormContext = () => {
  const context = useContext(CardFormContext);
  if (!context) {
    throw new Error('CardFormProvider 내부에서 사용 가능');
  }
  return context;
};

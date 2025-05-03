import { createContext, useContext } from 'react';
import { useCardNumbers } from '../hooks/useCardNumbers';
import useExpiryDate from '../hooks/useExpiry';
import useCVCNumber from '../hooks/useCVC';
import useCardBrand from '../hooks/useCardBrand';
import usePassword from '../hooks/usePassword';
import {
  CARD_NUMBER_RULE,
  CVC_RULE,
  EXPIRYDATE_RULE,
  PASSWORD_RULE,
} from '../constants/cardValidationRule';

type CardFormContextType = {
  cardNumbers: ReturnType<typeof useCardNumbers>;
  expiryDate: ReturnType<typeof useExpiryDate>;
  CVCNumber: ReturnType<typeof useCVCNumber>;
  cardBrand: ReturnType<typeof useCardBrand>;
  password: ReturnType<typeof usePassword>;

  isFormComplete: boolean;
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

  const updateFormComplete = () => {
    const cardNumbersComplete = cardNumbers.numbers.every(
      (number) => number.length === CARD_NUMBER_RULE.MAX_LENGTH
    );
    const expiryDateComplete =
      expiryDate.date.month.length === EXPIRYDATE_RULE.DATE_MAX_LENGTH &&
      expiryDate.date.year.length === EXPIRYDATE_RULE.DATE_MAX_LENGTH;
    const CVCNumberComplete = CVCNumber.CVC.length === CVC_RULE.MAX_LENGTH;
    const cardBrandComplete = cardBrand.brand !== '';
    const passwordComplete =
      password.password.length === PASSWORD_RULE.MAX_LENGTH;
    return (
      cardNumbersComplete &&
      expiryDateComplete &&
      CVCNumberComplete &&
      cardBrandComplete &&
      passwordComplete
    );
  };
  const isFormComplete = updateFormComplete();

  const value = {
    cardNumbers,
    expiryDate,
    CVCNumber,
    cardBrand,
    password,

    isFormComplete,
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

import { createContext, useContext } from 'react';
import { useCardNumbers } from '../hooks/useCardNumbers';
import { useExpiry } from '../hooks/useExpiry';
import { useCVC } from '../hooks/useCVC';
import { useBrand } from '../hooks/useBrand';
import { usePassword } from '../hooks/usePassword';

type CardFormContextType = {
  cardNumbers: string[];
  setCardNumbers: React.Dispatch<React.SetStateAction<string[]>>;
  month: string;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  CVC: string;
  setCVC: React.Dispatch<React.SetStateAction<string>>;
  brand: string;
  setBrand: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  resetForm: () => void;

  updateCardNumber: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  updateBrand: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  updateDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateCVC: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updatePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;

  cardNumbersRef: React.RefObject<HTMLInputElement[]>;
  expiryRef: React.RefObject<HTMLInputElement[]>;

  cardNumbersErrors: boolean[];
  expireErrors: boolean[];
  CVCErrors: boolean;
  passwordError: boolean;

  cardNumbersErrorMessage?: string;
  expireErrorMessage?: string;
  CVCErrorMessage?: string;
  passwordErrorMessage?: string;
};

const CardFormContext = createContext<CardFormContextType | null>(null);

export const CardFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    cardNumbers,
    setCardNumbers,
    updateCardNumber,
    cardNumbersRef,
    isErrors: cardNumbersErrors,
    errorMessage: cardNumbersErrorMessage,
  } = useCardNumbers();
  const {
    month,
    setMonth,
    year,
    setYear,
    updateDate,
    expiryRef,
    isErrors: expireErrors,
    errorMessage: expireErrorMessage,
  } = useExpiry();
  const {
    CVC,
    setCVC,
    updateCVC,
    isErrors: CVCErrors,
    errorMessage: CVCErrorMessage,
  } = useCVC();
  const { brand, setBrand, updateBrand } = useBrand();
  const {
    password,
    setPassword,
    updatePassword,
    isError: passwordError,
    errorMessage: passwordErrorMessage,
  } = usePassword();

  const resetForm = () => {
    setCardNumbers(['', '', '', '']);
    setMonth('');
    setYear('');
    setCVC('');
    setBrand('');
    setPassword('');
  };

  const value = {
    cardNumbers,
    setCardNumbers,
    month,
    setMonth,
    year,
    setYear,
    CVC,
    setCVC,
    brand,
    setBrand,
    password,
    setPassword,
    resetForm,

    updateCardNumber,
    updateBrand,
    updateDate,
    updateCVC,
    updatePassword,

    cardNumbersRef,
    expiryRef,

    cardNumbersErrors,
    expireErrors,
    CVCErrors,
    passwordError,

    cardNumbersErrorMessage,
    expireErrorMessage,
    CVCErrorMessage,
    passwordErrorMessage,
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

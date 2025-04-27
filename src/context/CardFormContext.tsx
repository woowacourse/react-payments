import { createContext, useContext, useState } from 'react';

const CardFormContext = createContext<{
  cardNumbers: string[];
  setCardNumbers: (numbers: string[]) => void;
  month: string;
  setMonth: (month: string) => void;
  year: string;
  setYear: (year: string) => void;
  CVC: string;
  setCVC: (cvc: string) => void;
  brand: string;
  setBrand: (brand: string) => void;
  password: string;
  setPassword: (password: string) => void;
  resetForm: () => void;
} | null>(null);

export const CardFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [CVC, setCVC] = useState('');
  const [brand, setBrand] = useState('');
  const [password, setPassword] = useState('');

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

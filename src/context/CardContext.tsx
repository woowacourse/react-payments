import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { Bank, CardNumber, Expiration, Name } from 'types/Card';

interface CardContext {
  isModalActive: boolean;
  cardNumber: CardNumber;
  date: Expiration;
  name: Name;
  bank: Bank;
  setIsModalActive: (value: boolean) => void;
  setCardNumber: Dispatch<SetStateAction<CardNumber>>;
  setDate: Dispatch<SetStateAction<Expiration>>;
  setName: Dispatch<SetStateAction<Name>>;
  setBank: Dispatch<SetStateAction<Bank>>;
}

const initialValue = {
  isModalActive: true,
  cardNumber: {
    number1: '',
    number2: '',
    number3: '',
    number4: '',
  },
  date: {
    month: '',
    year: '',
  },
  name: {
    name: '',
  },
  bank: {
    bank: '',
    color: '',
  },
  setIsModalActive: (value: boolean) => {},
  setCardNumber: () => {},
  setDate: () => {},
  setName: () => {},
  setBank: () => {},
};

export const AddCardContext = createContext<CardContext>(initialValue);

export const AddCardContextProvider = ({ children }: any) => {
  const [isModalActive, setIsModalActive] = useState(true);

  const [cardNumber, setCardNumber] = useState<CardNumber>({
    number1: '',
    number2: '',
    number3: '',
    number4: '',
  });

  const [date, setDate] = useState<Expiration>({
    month: '',
    year: '',
  });

  const [name, setName] = useState<Name>({
    name: '',
  });

  const [bank, setBank] = useState<Bank>({
    bank: '',
    color: '',
  });

  const value = {
    isModalActive,
    cardNumber,
    date,
    name,
    bank,
    setIsModalActive,
    setCardNumber,
    setDate,
    setName,
    setBank,
  };

  return (
    <AddCardContext.Provider value={value}>{children}</AddCardContext.Provider>
  );
};

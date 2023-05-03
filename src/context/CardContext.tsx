import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { Bank, CardName, CardNumber, Expiration, Name } from 'types/Card';

interface CardContext {
  isModalActive: boolean;
  cardNumber: CardNumber;
  date: Expiration;
  name: Name;
  bank: Bank;
  cardName: CardName;
  setIsModalActive: Dispatch<SetStateAction<boolean>> | null;
  setCardNumber: Dispatch<SetStateAction<CardNumber>> | null;
  setDate: Dispatch<SetStateAction<Expiration>> | null;
  setName: Dispatch<SetStateAction<Name>> | null;
  setBank: Dispatch<SetStateAction<Bank>> | null;
  setCardName: Dispatch<SetStateAction<CardName>> | null;
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
  cardName: {
    cardName: '',
  },
  setIsModalActive: null,
  setCardNumber: null,
  setDate: null,
  setName: null,
  setBank: null,
  setCardName: null,
};

export const AddCardContext = createContext<CardContext>(initialValue);

export const AddCardContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
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

  const [cardName, setCardName] = useState<CardName>({
    cardName: '',
  });

  const value = {
    isModalActive,
    cardNumber,
    date,
    name,
    bank,
    cardName,
    setIsModalActive,
    setCardNumber,
    setDate,
    setName,
    setBank,
    setCardName,
  };

  return (
    <AddCardContext.Provider value={value}>{children}</AddCardContext.Provider>
  );
};

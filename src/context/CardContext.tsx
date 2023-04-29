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
  setIsModalActive: (value: boolean) => void;
  setCardNumber: Dispatch<SetStateAction<CardNumber>>;
  setDate: Dispatch<SetStateAction<Expiration>>;
  setName: Dispatch<SetStateAction<Name>>;
  setBank: Dispatch<SetStateAction<Bank>>;
  setCardName: Dispatch<SetStateAction<CardName>>;
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
  setIsModalActive: (value: boolean) => {},
  setCardNumber: () => {},
  setDate: () => {},
  setName: () => {},
  setBank: () => {},
  setCardName: () => {},
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

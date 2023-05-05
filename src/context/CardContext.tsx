import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import {
  CardCompany,
  CardName,
  CardNumber,
  Expiration,
  Name,
} from 'types/Card';

interface CardContext {
  cardNumber: CardNumber;
  date: Expiration;
  name: Name;
  cardCompany: CardCompany;
  cardName: CardName;
  setCardNumber: Dispatch<SetStateAction<CardNumber>> | null;
  setDate: Dispatch<SetStateAction<Expiration>> | null;
  setName: Dispatch<SetStateAction<Name>> | null;
  setCardCompany: Dispatch<SetStateAction<CardCompany>> | null;
  setCardName: Dispatch<SetStateAction<CardName>> | null;
}

const initialValue = {
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
  name: '',
  cardCompany: {
    company: '',
    color: '',
  },
  cardName: '',
  setCardNumber: null,
  setDate: null,
  setName: null,
  setCardCompany: null,
  setCardName: null,
};

export const AddCardContext = createContext<CardContext>(initialValue);

export const AddCardContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
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

  const [name, setName] = useState<Name>('');

  const [cardCompany, setCardCompany] = useState<CardCompany>({
    company: '',
    color: '',
  });

  const [cardName, setCardName] = useState<CardName>('');

  const value = {
    cardNumber,
    date,
    name,
    cardCompany,
    cardName,
    setCardNumber,
    setDate,
    setName,
    setCardCompany,
    setCardName,
  };

  return (
    <AddCardContext.Provider value={value}>{children}</AddCardContext.Provider>
  );
};

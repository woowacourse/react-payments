import { createContext, useState } from 'react';
import { INITIAL_CARD } from '../global/constants';
import { ExpiryDateType } from '../components/paymentInputPage/PaymentInputPage';

interface CardContextType {
  cardNumbers: string[];
  setCardNumbers: React.Dispatch<React.SetStateAction<string[]>>;
  cardIssuer: string;
  setCardIssuer: React.Dispatch<React.SetStateAction<string>>;
  expiryDate: ExpiryDateType;
  setExpiryDate: React.Dispatch<React.SetStateAction<ExpiryDateType>>;
  cardCVC: string;
  setCardCVC: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export const CardContext = createContext<CardContextType | null>(null);

export function CardProvider({ children }: { children: React.ReactNode }) {
  const [cardNumbers, setCardNumbers] = useState<string[]>(
    INITIAL_CARD.cardNumbers
  );
  const [cardIssuer, setCardIssuer] = useState<string>(INITIAL_CARD.cardIssuer);
  const [expiryDate, setExpiryDate] = useState<ExpiryDateType>(
    INITIAL_CARD.expiryDate
  );
  const [cardCVC, setCardCVC] = useState<string>(INITIAL_CARD.cardCVC);
  const [password, setPassword] = useState<string>(INITIAL_CARD.password);

  return (
    <CardContext.Provider
      value={{
        cardNumbers,
        cardIssuer,
        expiryDate,
        cardCVC,
        password,
        setCardNumbers,
        setCardIssuer,
        setExpiryDate,
        setCardCVC,
        setPassword,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

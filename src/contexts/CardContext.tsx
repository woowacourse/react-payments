import { createContext, useState } from 'react';

interface CardContextType {
  cardNumbers: string[];
  setCardNumbers: React.Dispatch<React.SetStateAction<string[]>>;
  cardIssuer: string;
  setCardIssuer: React.Dispatch<React.SetStateAction<string>>;
}

export const CardContext = createContext<CardContextType | null>(null);

export function CardProvider({ children }: { children: React.ReactNode }) {
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [cardIssuer, setCardIssuer] = useState('');

  return (
    <CardContext.Provider
      value={{ cardNumbers, cardIssuer, setCardNumbers, setCardIssuer }}
    >
      {children}
    </CardContext.Provider>
  );
}

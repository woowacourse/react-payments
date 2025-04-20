import { createContext, useContext, useState, PropsWithChildren } from "react";

export interface CardContextType {
  cardNumbers: string[];
  setCardNumbers: React.Dispatch<React.SetStateAction<string[]>>;
  month: string;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  CVC: string;
  setCVC: React.Dispatch<React.SetStateAction<string>>;
}

const CardContext = createContext<CardContextType | null>(null);

export const CardProvider = ({ children }: PropsWithChildren) => {
  const [cardNumbers, setCardNumbers] = useState<string[]>(["", "", "", ""]);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [CVC, setCVC] = useState("");

  return (
    <CardContext.Provider
      value={{
        cardNumbers,
        setCardNumbers,
        month,
        setMonth,
        year,
        setYear,
        CVC,
        setCVC,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("CardProvider 안에서 사용 가능");
  }
  return context;
};

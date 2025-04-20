import { ReactNode } from "react";
import { CardContext, CardContextType } from "../src/contexts/CardContext";

interface CardProviderProps {
  children: ReactNode;
  value: Partial<CardContextType>;
}

const CustomCardProvider = ({ children, value }: CardProviderProps) => {
  const defaultValue: CardContextType = {
    cardNumbers: {
      first: "",
      second: "",
      third: "",
      fourth: "",
    },
    updateCardNumber: () => {},
    expirationPeriod: {
      month: "",
      year: "",
    },
    updateExpirationPeriod: () => {},
    cvcNumber: "",
    updateCvcNumber: () => {},
  };

  const contextValue = { ...defaultValue, ...value };

  return (
    <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
  );
};

export const withCustomCardProvider = (value: Partial<CardContextType>) => {
  return (Story: () => ReactNode) => (
    <CustomCardProvider value={value}>
      <Story />
    </CustomCardProvider>
  );
};

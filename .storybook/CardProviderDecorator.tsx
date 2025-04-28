import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/styles/theme";
import { CardContext, CardContextType } from "../src/contexts/CardContext";

interface CardProviderProps {
  children: ReactNode;
  value: Partial<CardContextType>;
}

const CardProvider = ({ children, value }: CardProviderProps) => {
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
    cardBrand: "",
    updateCardBrand: () => {},
    password: "",
    updatePassword: () => {},
    resetCard: () => {},
  };

  const contextValue = { ...defaultValue, ...value };

  return (
    <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
  );
};

export const withCardProviders = (cardValue: Partial<CardContextType> = {}) => {
  return (Story: () => ReactNode) => (
    <ThemeProvider theme={theme}>
      <CardProvider value={cardValue}>
        <Story />
      </CardProvider>
    </ThemeProvider>
  );
};

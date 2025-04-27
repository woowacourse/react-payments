import { ReactNode } from "react";
import { CARD_COMPANY } from "../../src/constants/card";
import { CardContext, CardContextType } from "../../src/contexts/CardContext";

interface CardProviderProps {
  children: ReactNode;
  value: Partial<CardContextType>;
}

const CustomCardProvider = ({ children, value }: CardProviderProps) => {
  const defaultValue: CardContextType = {
    cardNumber: {
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

    cardCompany: CARD_COMPANY.none,
    updateCardCompany: () => {},

    password: "",
    updatePassword: () => {},

    isFieldFilled: () => false,
    areAllFieldsFilled: () => false,
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

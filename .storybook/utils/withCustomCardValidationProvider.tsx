import { ReactNode } from "react";
import {
  CardValidationContext,
  CardValidationContextType,
} from "../../src/contexts/CardValidationContext";
import { CARD_FORM_TYPE, CardFormType } from "../../src/constants/constants";

interface CardValidationProviderProps {
  children: ReactNode;
  value: Partial<CardValidationContextType>;
}

const CustomCardValidationProvider = ({
  children,
  value,
}: CardValidationProviderProps) => {
  const defaultValue: CardValidationContextType = {
    cardNumberErrors: {
      first: false,
      second: false,
      third: false,
      fourth: false,
    },
    expirationPeriodErrors: {
      month: false,
      year: false,
    },
    cvcNumberError: false,
    cardCompanyError: false,
    passwordError: false,

    validateCardNumber: () => {},
    validateExpirationPeriod: () => {},
    validateCvcNumber: () => {},
    validateCardCompany: () => {},
    validatePassword: () => {},
    hasErrorByType: () => false,
  };

  const contextValue = { ...defaultValue, ...value };

  contextValue.hasErrorByType = (type: CardFormType): boolean => {
    switch (type) {
      case CARD_FORM_TYPE.cardNumbers:
        return Object.values(contextValue.cardNumberErrors).some(
          (error) => error
        );
      case CARD_FORM_TYPE.expirationPeriod:
        return Object.values(contextValue.expirationPeriodErrors).some(
          (error) => error
        );
      case CARD_FORM_TYPE.cvcNumber:
        return contextValue.cvcNumberError;
      case CARD_FORM_TYPE.cardCompany:
        return contextValue.cardCompanyError;
      case CARD_FORM_TYPE.password:
        return contextValue.passwordError;
      default:
        return false;
    }
  };

  return (
    <CardValidationContext.Provider value={contextValue}>
      {children}
    </CardValidationContext.Provider>
  );
};

export const withCustomCardValidationProvider = (
  value: Partial<CardValidationContextType>
) => {
  return (Story: () => ReactNode) => (
    <CustomCardValidationProvider value={value}>
      <Story />
    </CustomCardValidationProvider>
  );
};

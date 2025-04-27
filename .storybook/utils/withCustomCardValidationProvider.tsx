import { ReactNode } from "react";
import { CARD_FORM_TYPE } from "../../src/constants/card";
import {
  CardValidationContext,
  CardValidationContextType,
} from "../../src/contexts/CardValidationContext";
import { CardFormType } from "../../src/types/card";
import { ErrorMessage } from "../../src/types/validation";

interface CardValidationProviderProps {
  children: ReactNode;
  value: Partial<CardValidationContextType>;
}

const CustomCardValidationProvider = ({
  children,
  value,
}: CardValidationProviderProps) => {
  const initialCommonState = {
    errorMessage: null,
    hasError: false,
  };

  const defaultValue: CardValidationContextType = {
    cardNumberError: {
      errorMessage: null,
      hasError: {
        first: false,
        second: false,
        third: false,
        fourth: false,
      },
    },
    expirationPeriodError: {
      errorMessage: null,
      hasError: {
        month: false,
        year: false,
      },
    },
    cvcNumberError: initialCommonState,
    cardCompanyError: initialCommonState,
    passwordError: initialCommonState,

    validateCardNumber: () => {},
    validateExpirationPeriod: () => {},
    validateCvcNumber: () => {},
    validateCardCompany: () => {},
    validatePassword: () => {},
    hasErrorByType: () => false,
    getErrorMessage: () => null,
    areAllFieldsValid: () => false,
  };

  const contextValue = { ...defaultValue, ...value };

  contextValue.hasErrorByType = (type: CardFormType): boolean => {
    switch (type) {
      case CARD_FORM_TYPE.cardNumbers:
        return Object.values(contextValue.cardNumberError.hasError).some(
          (error) => error
        );
      case CARD_FORM_TYPE.expirationPeriod:
        return Object.values(contextValue.expirationPeriodError.hasError).some(
          (error) => error
        );
      case CARD_FORM_TYPE.cvcNumber:
        return contextValue.cvcNumberError.hasError;
      case CARD_FORM_TYPE.cardCompany:
        return contextValue.cardCompanyError.hasError;
      case CARD_FORM_TYPE.password:
        return contextValue.passwordError.hasError;
      default:
        return false;
    }
  };

  contextValue.getErrorMessage = (type: CardFormType): ErrorMessage => {
    switch (type) {
      case CARD_FORM_TYPE.cardNumbers:
        return contextValue.cardNumberError.errorMessage;
      case CARD_FORM_TYPE.expirationPeriod:
        return contextValue.expirationPeriodError.errorMessage;
      case CARD_FORM_TYPE.cvcNumber:
        return contextValue.cvcNumberError.errorMessage;
      case CARD_FORM_TYPE.cardCompany:
        return contextValue.cardCompanyError.errorMessage;
      case CARD_FORM_TYPE.password:
        return contextValue.passwordError.errorMessage;
      default:
        return null;
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

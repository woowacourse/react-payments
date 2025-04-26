import { ReactNode } from "react";
import { CARD_FORM_TYPE } from "../../src/constants/constants";
import {
  CardValidationContext,
  CardValidationContextType,
} from "../../src/contexts/CardValidationContext";
import { CardFormType, ErrorMessage } from "../../src/types/types";

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
    cardNumberErrors: {
      errorMessage: null,
      hasError: {
        first: false,
        second: false,
        third: false,
        fourth: false,
      },
    },
    expirationPeriodErrors: {
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
        return Object.values(contextValue.cardNumberErrors.hasError).some(
          (error) => error
        );
      case CARD_FORM_TYPE.expirationPeriod:
        return Object.values(contextValue.expirationPeriodErrors.hasError).some(
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
        return contextValue.cardNumberErrors.errorMessage;
      case CARD_FORM_TYPE.expirationPeriod:
        return contextValue.expirationPeriodErrors.errorMessage;
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

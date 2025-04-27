import { createContext, useContext } from 'react';
import { CardNumberType, CvcType, ExpirationKey, ExpirationType } from '../types';

export type PasswordSectionProps = {
  password: { value: string; errorMessage: string };
  handlePasswordChange: (value: string) => void;
};

export type CardNumberSectionProps = {
  cardNumbers: CardNumberType;
  onCardNumbersChange: (field: keyof CardNumberType, value: string) => void;
  inputRefs: {
    first: React.RefObject<HTMLInputElement | null>;
    second: React.RefObject<HTMLInputElement | null>;
    third: React.RefObject<HTMLInputElement | null>;
    fourth: React.RefObject<HTMLInputElement | null>;
  };
  getCardNumberErrorMessage: (cardNumbers: CardNumberType) => string;
};

export type CardCompanySectionProps = {
  value: string;
  onSelect: (value: string) => void;
};

export type CardExpirationSectionProps = {
  expiration: ExpirationType;
  onExpirationChange: (field: ExpirationKey, value: string) => void;
  ref: { month: React.RefObject<HTMLInputElement | null>; year: React.RefObject<HTMLInputElement | null> };
};

export type CvcSectionProps = {
  cvc: CvcType;
  handleCvcChange: (value: string) => void;
};

export type CardFormProps = {
  cardNumbers: CardNumberSectionProps['cardNumbers'];
  onCardNumbersChange: CardNumberSectionProps['onCardNumbersChange'];
  cardInputRefs: CardNumberSectionProps['inputRefs'];
  getCardNumberErrorMessage: CardNumberSectionProps['getCardNumberErrorMessage'];

  expiration: CardExpirationSectionProps['expiration'];
  handleExpirationChange: CardExpirationSectionProps['onExpirationChange'];
  expirationRef: CardExpirationSectionProps['ref'];

  company: CardCompanySectionProps['value'];
  handleCompanySelect: CardCompanySectionProps['onSelect'];

  cvc: CvcSectionProps['cvc'];
  handleCvcChange: CvcSectionProps['handleCvcChange'];

  password: PasswordSectionProps['password'];
  handlePasswordChange: PasswordSectionProps['handlePasswordChange'];
};

export const FormContext = createContext<CardFormProps | null>(null);

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormContext.Provider');
  }
  return context;
}

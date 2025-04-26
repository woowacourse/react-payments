import { createContext, useContext } from 'react';
import { CardNumberSectionProps } from '../components/CardNumberSection/CardNumberSection';
import { CardExpirationSectionProps } from '../components/CardExpirationSection/CardExpirationSection';
import { CardCompanySectionProps } from '../components/CardCompanySection/CardCompanySection';
import { CvcSectionProps } from '../components/CvcSection/CvcSection';
import { PasswordSectionProps } from '../components/PasswordSection/PasswordSection';

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

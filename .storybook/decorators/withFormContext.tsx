import { FormContext, CardFormProps } from '../../src/contexts/useFormContext';
import { useState } from 'react';
import * as React from 'react';

export function createMockFormState(overrides?: Partial<CardFormProps>): CardFormProps {
  return {
    cardNumbers: {
      first: { value: '', isError: false },
      second: { value: '', isError: false },
      third: { value: '', isError: false },
      fourth: { value: '', isError: false }
    },
    expiration: {
      month: { value: '', errorMessage: '' },
      year: { value: '', errorMessage: '' }
    },
    company: '',

    onCardNumbersChange: () => {},
    cardInputRefs: {
      first: { current: null },
      second: { current: null },
      third: { current: null },
      fourth: { current: null }
    },
    getCardNumberErrorMessage: () => '',
    handleExpirationChange: () => {},
    expirationRef: {
      month: { current: null },
      year: { current: null }
    },
    handleCompanySelect: () => {},
    cvc: { value: '', errorMessage: '' },
    handleCvcChange: () => {},

    password: { value: '', errorMessage: '' },
    handlePasswordChange: () => {},

    ...overrides
  };
}

function FormContextWrapper({ children }: { children: React.ReactNode }) {
  const [formState] = useState(() => createMockFormState());

  return <FormContext.Provider value={formState}>{children}</FormContext.Provider>;
}

export function withFormContext(Story: any) {
  return (
    <FormContextWrapper>
      <Story />
    </FormContextWrapper>
  );
}

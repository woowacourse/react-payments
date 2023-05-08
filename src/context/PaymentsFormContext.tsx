import type { PropsWithChildren } from 'react';
import { createContext, useCallback, useEffect, useMemo, useState } from 'react';

import type { CreditCard } from '../domain/CreditCard';
import { usePersistedState } from '../hooks/usePersistedState';
import { useValidation } from '../hooks/useValidation';
import {
  validateCVC,
  validateCardNumbers,
  validateCardPassword,
  validateExpirationDate,
} from '../validations/Validation';

type PaymentsFormContextValue = {
  creditCard: Partial<CreditCard>;
  validatedCreditCard: CreditCard | null;
  validationResult: Partial<Record<keyof CreditCard, string>>;
  setCreditCard: (creditCard: Partial<Omit<CreditCard, 'id'>>) => void;
  validate: (data: Partial<CreditCard>) => data is CreditCard;
  validateField: <Field extends keyof CreditCard>(
    field: Field,
    value: unknown,
  ) => value is CreditCard[Field];
  clear: () => void;
};

export const PaymentsFormContext = createContext<PaymentsFormContextValue | null>(null);

export const PaymentsFormProvider = (props: PropsWithChildren) => {
  const { children } = props;

  const [creditCard, setCreditCard] = usePersistedState<Partial<CreditCard>>(
    'formCreditCard',
    {},
    {
      save: (key, value) => sessionStorage.setItem(key, value),
      load: (key) => sessionStorage.getItem(key),
    },
  );
  const { validate, validateField, validationResult } = useValidation<CreditCard>({
    cardNumbers: validateCardNumbers,
    expirationDate: validateExpirationDate,
    cvc: validateCVC,
    password: validateCardPassword,
  });
  const [validatedCreditCard, setValidatedCreditCard] = useState<CreditCard | null>(null);

  useEffect(() => {
    setValidatedCreditCard(validate(creditCard) ? creditCard : null);
  }, [creditCard, setValidatedCreditCard, validate]);

  const clear = useCallback(() => {
    setCreditCard({});
  }, [setCreditCard]);

  const contextValue = useMemo(
    () => ({
      creditCard,
      validatedCreditCard,
      validationResult,
      setCreditCard,
      validate,
      validateField,
      clear,
    }),
    [
      creditCard,
      validatedCreditCard,
      validateField,
      validationResult,
      setCreditCard,
      clear,
      validate,
    ],
  );

  return (
    <PaymentsFormContext.Provider value={contextValue}>{children}</PaymentsFormContext.Provider>
  );
};

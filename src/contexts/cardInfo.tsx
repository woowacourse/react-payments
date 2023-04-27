import { createContext } from 'react';

import { useCompany } from '../hooks/useCompany';
import { useInput } from '../hooks/useInput';
import { cardRegisterValidator } from '../validation/cardRegister';

export const defaultInput = {
  type: 'text',
  required: true,
  value: '',
  isError: false,
};

const optionalInput = {
  ...defaultInput,
  required: false,
};

export const passwordInput = {
  ...defaultInput,
  type: 'password',
};

export const CardPreviewInfoContext = createContext({
  CARD_NUMBER: {
    first: { ...defaultInput },
    second: { ...defaultInput },
    third: { ...passwordInput },
    fourth: { ...passwordInput },
  },
  DATE: {
    month: { ...defaultInput },
    year: { ...defaultInput },
  },
  USERNAME: {
    first: { ...optionalInput },
  },
  COMPANY: {
    clicked: {} as ReturnType<typeof useCompany>,
  },
});

export function CardInfoProvider({ children }: { children: React.ReactNode }) {
  const preivewInfo = {
    CARD_NUMBER: {
      first: {
        ...defaultInput,
        ...useInput(cardRegisterValidator.cardNumber),
      },
      second: {
        ...defaultInput,
        ...useInput(cardRegisterValidator.cardNumber),
      },
      third: {
        ...passwordInput,
        ...useInput(cardRegisterValidator.cardNumber),
      },
      fourth: {
        ...passwordInput,
        ...useInput(cardRegisterValidator.cardNumber),
      },
    },
    DATE: {
      month: {
        ...defaultInput,
        ...useInput(cardRegisterValidator.month),
      },
      year: {
        ...defaultInput,
        ...useInput(cardRegisterValidator.year),
      },
    },
    USERNAME: {
      first: {
        ...optionalInput,
        ...useInput(cardRegisterValidator.username),
      },
    },
    COMPANY: {
      clicked: { ...useCompany() },
    },
  };

  return (
    <CardPreviewInfoContext.Provider value={preivewInfo}>
      {children}
    </CardPreviewInfoContext.Provider>
  );
}

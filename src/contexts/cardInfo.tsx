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
  card_number: {
    first: { ...defaultInput },
    second: { ...defaultInput },
    third: { ...passwordInput },
    fourth: { ...passwordInput },
  },
  expired_date: {
    month: { ...defaultInput },
    year: { ...defaultInput },
  },
  username: {
    first: { ...optionalInput },
  },
  company: {
    clicked: {} as ReturnType<typeof useCompany>,
  },
});

export function CardInfoProvider({ children }: { children: React.ReactNode }) {
  const preivewInfo = {
    card_number: {
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
    expired_date: {
      month: {
        ...defaultInput,
        ...useInput(cardRegisterValidator.month),
      },
      year: {
        ...defaultInput,
        ...useInput(cardRegisterValidator.year),
      },
    },
    username: {
      first: {
        ...optionalInput,
        ...useInput(cardRegisterValidator.username),
      },
    },
    company: {
      clicked: { ...useCompany() },
    },
  };

  return (
    <CardPreviewInfoContext.Provider value={preivewInfo}>
      {children}
    </CardPreviewInfoContext.Provider>
  );
}

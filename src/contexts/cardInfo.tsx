import { createContext } from 'react';
import { REGEX } from '../constants';
import { useInput } from '../hooks/useInput';
import { cardRegisterValidator } from '../validation/cardRegister';

export const defaultInput = {
  type: 'text',
  required: true,
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
  CARD_NUMBER: [
    {
      ...defaultInput,
      value: '',
      isError: false,
    },
    {
      ...defaultInput,
      value: '',
      isError: false,
    },
    {
      ...passwordInput,
      value: '',
      isError: false,
    },
    {
      ...passwordInput,
      value: '',
      isError: false,
    },
  ],
  DATE: [
    {
      ...defaultInput,
      value: '',
      isError: false,
    },
    {
      ...defaultInput,
      value: '',
      isError: false,
    },
  ],
  USERNAME: [
    {
      ...optionalInput,
      value: '',
      isError: false,
    },
  ],
});

export function CardInfoProvider({ children }: { children: React.ReactNode }) {
  const preivewInfo = {
    CARD_NUMBER: [
      {
        ...defaultInput,
        ...useInput(cardRegisterValidator.cardNumber),
      },
      {
        ...defaultInput,
        ...useInput(cardRegisterValidator.cardNumber),
      },
      {
        ...passwordInput,
        ...useInput(cardRegisterValidator.cardNumber),
      },
      {
        ...passwordInput,
        ...useInput(cardRegisterValidator.cardNumber),
      },
    ],
    DATE: [
      {
        ...defaultInput,
        ...useInput(cardRegisterValidator.month),
      },
      {
        ...defaultInput,
        ...useInput(cardRegisterValidator.year),
      },
    ],
    USERNAME: [
      {
        ...optionalInput,
        ...useInput(cardRegisterValidator.username),
      },
    ],
  };

  return (
    <CardPreviewInfoContext.Provider value={preivewInfo}>
      {children}
    </CardPreviewInfoContext.Provider>
  );
}

import { createContext } from 'react';
import { REGEX } from '../constants';
import { useInput } from '../hooks/useInput';

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
      regexp: REGEX.CARD_NUMBER,
    },
    {
      ...defaultInput,
      value: '',
      isError: false,
      regexp: REGEX.CARD_NUMBER,
    },
    {
      ...passwordInput,
      value: '',
      isError: false,
      regexp: REGEX.CARD_NUMBER,
    },
    {
      ...passwordInput,
      value: '',
      isError: false,
      regexp: REGEX.CARD_NUMBER,
    },
  ],
  DATE: [
    {
      ...defaultInput,
      value: '',
      isError: false,
      regexp: REGEX.MONTH,
    },
    {
      ...defaultInput,
      value: '',
      isError: false,
      regexp: REGEX.YEAR,
    },
  ],
  USERNAME: [
    {
      ...optionalInput,
      value: '',
      isError: false,
      regexp: REGEX.USERNAME,
    },
  ],
});

export function CardInfoProvider({ children }: { children: React.ReactNode }) {
  const preivewInfo = {
    CARD_NUMBER: [
      {
        ...defaultInput,
        ...useInput(),
        regexp: REGEX.CARD_NUMBER,
      },
      {
        ...defaultInput,
        ...useInput(),
        regexp: REGEX.CARD_NUMBER,
      },
      {
        ...passwordInput,
        ...useInput(),
        regexp: REGEX.CARD_NUMBER,
      },
      {
        ...passwordInput,
        ...useInput(),
        regexp: REGEX.CARD_NUMBER,
      },
    ],
    DATE: [
      {
        ...defaultInput,
        ...useInput(),
        regexp: REGEX.MONTH,
      },
      {
        ...defaultInput,
        ...useInput(),
        regexp: REGEX.YEAR,
      },
    ],
    USERNAME: [
      {
        ...optionalInput,
        ...useInput(),
        regexp: REGEX.USERNAME,
      },
    ],
  };

  return (
    <CardPreviewInfoContext.Provider value={preivewInfo}>
      {children}
    </CardPreviewInfoContext.Provider>
  );
}

import { createContext } from 'react';

export const defaultInput = {
  type: 'text',
  required: true,
  value: '',
  isError: false,
};

export const optionalInput = {
  ...defaultInput,
  required: false,
};

export const passwordInput = {
  ...defaultInput,
  type: 'password',
};

export const previewInfoDefault = {
  cardNumber: {
    first: { ...defaultInput },
    second: { ...defaultInput },
    third: { ...passwordInput },
    fourth: { ...passwordInput },
  },
  expiredDate: {
    month: { ...defaultInput },
    year: { ...defaultInput },
  },
  username: {
    first: { ...optionalInput },
  },
  company: {
    clicked: {
      value: '',
      handleClick: (e: React.MouseEvent<HTMLImageElement>) => {
        e;
      },
    },
  },
};
export const CardPreviewInfoContext = createContext(previewInfoDefault);

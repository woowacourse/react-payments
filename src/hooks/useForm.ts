import { createContext, useContext } from 'react';
import { REGEX } from '../constants';
import { useInput } from './useInput';
import { CardPreviewInfoContext } from '../contexts/cardInfo';

const defaultInput = {
  type: 'text',
  required: true,
};

const optionalInput = {
  ...defaultInput,
  required: false,
};

const passwordInput = {
  ...defaultInput,
  type: 'password',
};

export function useForm() {
  const previewInfo = useContext(CardPreviewInfoContext);

  const cardRegisterForm = {
    ...previewInfo,
    CODE: [
      {
        ...passwordInput,
        ...useInput(),
        regexp: REGEX.CODE,
      },
    ],
    CARD_PASSWORD: [
      {
        ...passwordInput,
        ...useInput(),
        regexp: REGEX.CARD_PASSWORD,
      },
      {
        ...passwordInput,
        ...useInput(),
        regexp: REGEX.CARD_PASSWORD,
      },
    ],
  };

  return cardRegisterForm;
}

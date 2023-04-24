import { REGEX } from '../constants';
import { useInput } from './useInput';

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
  const cardRegisterForm = {
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

import { PageInfo } from '../types';
import {
  convertUpperCase,
  isNumber,
  isOnlyEnglish,
  lengthValidate,
} from '../utils';
import { UseInputProps, useInput } from './useInput';

type UseFormInputsProps = {
  [page in PageInfo]: {
    [kind: string]: UseInputProps;
  };
};

export const useFormInputs = () => {
  const formInputs: UseFormInputsProps = {
    homePage: {},
    addCardPage: {
      firstCardNumber: useInput('', {
        name: 'firstCardInput',
        maxLength: 4,
        validate: isNumber,
        errorMessage: '오직 숫자만 입력 가능합니다.',
      }),
      secondCardNumber: useInput('', {
        name: 'secondCardInput',
        maxLength: 4,
      }),
      thirdCardNumber: useInput('', {
        name: 'thirdCardInput',
        maxLength: 4,
      }),
      fourthCardNumber: useInput('', {
        name: 'fourthCardInput',
        maxLength: 4,
      }),
      year: useInput('', {
        name: 'yearInput',
        errorMessage: '카드의 연도를 확인해주세요',
        maxLength: 2,
      }),
      month: useInput('', {
        name: 'monthInput',
        errorMessage: '카드의 달을 확인해주세요.',
        maxLength: 2,
      }),
      owner: useInput('', {
        name: 'ownerInput',
        maxLength: 30,
        validate: isOnlyEnglish,
        errorMessage: '영문만 입력할 수 있어요.',
        convertValue: convertUpperCase,
      }),
      cvc: useInput('', { name: 'cvcInput', maxLength: 3 }),
      firstPassword: useInput('', {
        name: 'firstPasswordInput',
        maxLength: 1,
      }),
      secondPassword: useInput('', {
        name: 'secondPasswordInput',
        maxLength: 1,
      }),
      cardTitle: useInput('', {
        name: 'cardTitleInput',
        maxLength: 20,
        validate: lengthValidate(20),
        errorMessage: '20 글자 이하로만 입력 가능해요.',
      }),
    },
  };

  return { formInputs };
};

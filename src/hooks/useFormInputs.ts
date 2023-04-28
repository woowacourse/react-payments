import { PageInfo } from '../types';
import {
  convertUpperCase,
  isNumber,
  isOnlyEnglish,
  lengthValidate,
  monthValidate,
  yearValidate,
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
        isRequired: true,
        errorMessage: '오직 숫자만 입력 가능합니다.',
      }),
      secondCardNumber: useInput('', {
        name: 'secondCardInput',
        maxLength: 4,
        validate: isNumber,
        isRequired: true,
        errorMessage: '오직 숫자만 입력 가능합니다.',
      }),
      thirdCardNumber: useInput('', {
        name: 'thirdCardInput',
        maxLength: 4,
        validate: isNumber,
        isRequired: true,
        errorMessage: '오직 숫자만 입력 가능합니다.',
      }),
      fourthCardNumber: useInput('', {
        name: 'fourthCardInput',
        maxLength: 4,
        validate: isNumber,
        isRequired: true,
        errorMessage: '오직 숫자만 입력 가능합니다.',
      }),
      year: useInput('', {
        name: 'yearInput',
        isRequired: true,
        validate: yearValidate,
        errorMessage: '카드의 연도를 확인해주세요',
        maxLength: 2,
        isNumber: true,
      }),
      month: useInput('', {
        name: 'monthInput',
        validate: monthValidate,
        isRequired: true,
        errorMessage: '카드의 달을 확인해주세요.',
        maxLength: 2,
        isNumber: true,
      }),
      owner: useInput('', {
        name: 'ownerInput',
        maxLength: 30,
        validate: isOnlyEnglish,
        isRequired: false,
        errorMessage: '영문만 입력할 수 있어요.',
        convertValue: convertUpperCase,
      }),
      cvc: useInput('', {
        name: 'cvcInput',
        maxLength: 3,
        isRequired: true,
        errorMessage: '오직 숫자만 입력 가능합니다.',
        validate: isNumber,
      }),
      firstPassword: useInput('', {
        name: 'firstPasswordInput',
        maxLength: 1,
        isRequired: true,
        errorMessage: '오직 숫자만 입력 가능합니다.',
        validate: isNumber,
      }),
      secondPassword: useInput('', {
        name: 'secondPasswordInput',
        maxLength: 1,
        isRequired: true,
        errorMessage: '오직 숫자만 입력 가능합니다.',
        validate: isNumber,
      }),
      cardTitle: useInput('', {
        name: 'cardTitleInput',
        maxLength: 20,
        validate: lengthValidate(20),
        errorMessage: '20 글자 이하로만 입력 가능해요.',
        isRequired: false,
      }),
    },
  };

  return { formInputs };
};

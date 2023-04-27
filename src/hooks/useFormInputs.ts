import { PageInfo } from '../types';
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
      }),
    },
  };

  return { formInputs };
};

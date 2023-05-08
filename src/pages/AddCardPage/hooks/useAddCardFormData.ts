import { type UseInputProps, useInput } from '@hooks/useInput';
import {
  isNumber,
  isOnlyEnglish,
  monthValidate,
  yearValidate,
} from '@utils/validate';
import { INPUT_ERROR_MESSAGE } from '@constants/InputErrorMessage';

interface AddCardFormDataProps {
  firstCardNumber: UseInputProps;
  secondCardNumber: UseInputProps;
  thirdCardNumber: UseInputProps;
  fourthCardNumber: UseInputProps;
  year: UseInputProps;
  month: UseInputProps;
  owner: UseInputProps;
  cvc: UseInputProps;
  firstPassword: UseInputProps;
  secondPassword: UseInputProps;
}

export const useAddCardFormData = () => {
  const currentYear = new Date().getFullYear() % 100;

  const formData: Record<keyof AddCardFormDataProps, UseInputProps> = {
    firstCardNumber: useInput('', {
      name: 'firstCardInput',
      maxLength: 4,
      validate: isNumber,
      isRequired: true,
      errorMessage: INPUT_ERROR_MESSAGE.ONLY_NUMBER,
    }),
    secondCardNumber: useInput('', {
      name: 'secondCardInput',
      maxLength: 4,
      validate: isNumber,
      isRequired: true,
      errorMessage: INPUT_ERROR_MESSAGE.ONLY_NUMBER,
    }),
    thirdCardNumber: useInput('', {
      name: 'thirdCardInput',
      maxLength: 4,
      validate: isNumber,
      isRequired: true,
      errorMessage: INPUT_ERROR_MESSAGE.ONLY_NUMBER,
    }),
    fourthCardNumber: useInput('', {
      name: 'fourthCardInput',
      maxLength: 4,
      validate: isNumber,
      isRequired: true,
      errorMessage: INPUT_ERROR_MESSAGE.ONLY_NUMBER,
    }),
    year: useInput('', {
      name: 'yearInput',
      isRequired: true,
      validate: yearValidate,
      errorMessage: `카드의 연도는 ${currentYear}년부터 ${
        currentYear + 5
      }년까지 입력이 가능합니다.`,
      maxLength: 2,
      isNumber: true,
    }),
    month: useInput('', {
      name: 'monthInput',
      validate: monthValidate,
      isRequired: true,
      errorMessage: '카드의 달은 01월부터 12월까지 입력이 가능합니다.',
      maxLength: 2,
      isNumber: true,
    }),
    owner: useInput('', {
      name: 'ownerInput',
      maxLength: 30,
      validate: isOnlyEnglish,
      isRequired: false,
      errorMessage: INPUT_ERROR_MESSAGE.ONLY_ENGLISH,
      convertValue: (text: string) => text.toUpperCase(),
    }),
    cvc: useInput('', {
      name: 'cvcInput',
      maxLength: 3,
      isRequired: true,
      errorMessage: INPUT_ERROR_MESSAGE.ONLY_NUMBER,
      validate: isNumber,
    }),
    firstPassword: useInput('', {
      name: 'firstPasswordInput',
      maxLength: 1,
      isRequired: true,
      errorMessage: INPUT_ERROR_MESSAGE.ONLY_NUMBER,
      validate: isNumber,
    }),
    secondPassword: useInput('', {
      name: 'secondPasswordInput',
      maxLength: 1,
      isRequired: true,
      errorMessage: INPUT_ERROR_MESSAGE.ONLY_NUMBER,
      validate: isNumber,
    }),
  };

  return { formData };
};

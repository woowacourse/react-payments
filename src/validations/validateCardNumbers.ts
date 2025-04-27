import { ValidateReturnType } from './validate.types';

import { CardFormFiledType } from '@/components/features/CardFormFiled/CardFormFiled.types';
import { CardInputTypeOptions } from '@/hooks/useCardInput';

export const validateCardNumbers = (value: string, type: CardFormFiledType): ValidateReturnType => {
  const cardNumberRegex = new RegExp(`^\\d{${CardInputTypeOptions[type].valueLength}}$`);

  if (!cardNumberRegex.test(value)) {
    return {
      isValid: false,
      errorMessage: `${CardInputTypeOptions[type].valueLength}자리의 숫자를 입력하세요.`,
    };
  }

  return { isValid: true, errorMessage: null };
};

export const validateInputChange = (value: string) => {
  if (isNaN(Number(value))) {
    return {
      isValid: false,
      errorMessage: '숫자를 입력하세요.',
    };
  }

  return { isValid: true, errorMessage: null };
};

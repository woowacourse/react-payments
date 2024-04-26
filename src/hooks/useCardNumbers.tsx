import { isOnlyDigit, isSameLength } from '../domain/checkIsValid';

import { BOUND } from '../constants/number';
import { ERROR_MESSAGE } from '../constants/message';
import useLastValidValue from './useLastValidValue';
import useValidateInput from './useValidateInput';

const cardNumberValidateInputProps = {
  validatorPropsArray: [
    {
      checkIsValid: isOnlyDigit,
      errorMessage: ERROR_MESSAGE.notDigit,
    },
    {
      checkIsValid: (string: string) =>
        isSameLength(string, BOUND.cardNumbersOnePartUpper),
      errorMessage: `${BOUND.cardNumbersOnePartUpper}${ERROR_MESSAGE.invalidLengthTail}`,
    },
  ],
};

export default function useCardNumbers() {
  const firstCardNumberValidateInput = useValidateInput(
    cardNumberValidateInputProps
  );
  const secondCardNumberValidateInput = useValidateInput(
    cardNumberValidateInputProps
  );
  const thirdCardNumberValidateInput = useValidateInput(
    cardNumberValidateInputProps
  );
  const fourthCardNumberValidateInput = useValidateInput(
    cardNumberValidateInputProps
  );
  const cardNumberInputs = [
    firstCardNumberValidateInput,
    secondCardNumberValidateInput,
    thirdCardNumberValidateInput,
    fourthCardNumberValidateInput,
  ];

  const cardNumbersErrorMessage = useLastValidValue({
    checkValues: cardNumberInputs.map(input => input.errorMessage),
    invalidValues: [''],
  });

  const cardNumbers = cardNumberInputs.map(input => input.inputValue);
  const isValid =
    cardNumbers.join('').length ===
      BOUND.cardNumbersOnePartUpper * cardNumberInputs.length &&
    cardNumbersErrorMessage === undefined;

  const initValue = () => {
    cardNumberInputs.forEach(el => el.initValue());
  };

  return {
    cardNumbers,
    cardNumberOnChanges: cardNumberInputs.map(input => input.onChange),
    errorMessage: cardNumbersErrorMessage ?? '',
    isValidNumberParts: cardNumberInputs.map(
      input => input.errorMessage === ''
    ),
    isValid,
    initValue,
  };
}

export interface UseCardNumbers {
  cardNumbers: string[];
  cardNumberOnChanges: ((event: React.ChangeEvent<HTMLInputElement>) => void)[];
  errorMessage: string;
  isValid: boolean;
  isValidNumberParts: boolean[];
  initValue: () => void;
}

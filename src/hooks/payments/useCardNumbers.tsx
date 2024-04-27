import { isOnlyDigit, isSameLength } from '../../domain/checkIsValid';

import { BOUND } from '../../constants/number';
import { ERROR_MESSAGE } from '../../constants/message';
import useLastValidValue from '../useLastValidValue';
import { useState } from 'react';
import useValidateInput from '../useValidateInput';

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

  const [isTouchedFirst, setIsTouchedFirst] = useState(false);
  const [isTouchedSecond, setIsTouchedSecond] = useState(false);
  const [isTouchedThird, setIsTouchedThird] = useState(false);
  const [isTouchedFourth, setIsTouchedFourth] = useState(false);

  const cardNumberInputs = [
    firstCardNumberValidateInput,
    secondCardNumberValidateInput,
    thirdCardNumberValidateInput,
    fourthCardNumberValidateInput,
  ];

  const isTouchedNumbers = [
    isTouchedFirst,
    isTouchedSecond,
    isTouchedThird,
    isTouchedFourth,
  ];

  const setIsTouchedNumbers = [
    setIsTouchedFirst,
    setIsTouchedSecond,
    setIsTouchedThird,
    setIsTouchedFourth,
  ];

  const cardNumbersErrorMessage = useLastValidValue({
    checkValues: cardNumberInputs.map(input => input.errorMessage),
    invalidValues: [''],
  });

  const cardNumbers = cardNumberInputs.map(input => input.inputValue);

  const isEveryTouched = isTouchedNumbers.every(isTouched => isTouched);
  const isEveryFullFilled = cardNumbers.every(
    number => number.length === cardNumberInputs.length
  );

  const isValid = isEveryTouched && isEveryFullFilled;
  cardNumbersErrorMessage === undefined;

  const initValue = () => {
    cardNumberInputs.forEach(el => el.initValue());
    setIsTouchedNumbers.forEach(setIsTouched => setIsTouched(false));
  };

  return {
    cardNumbers,
    cardNumberOnChanges: cardNumberInputs.map((input, idx) => {
      return (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsTouchedNumbers[idx](true);
        input.onChange(event);
      };
    }),
    errorMessage: cardNumbersErrorMessage ?? '',
    isValidNumberParts: cardNumberInputs.map(
      (input, idx) => input.errorMessage === '' && isTouchedNumbers[idx]
    ),
    isValid,
    isTouched: isTouchedNumbers.some(isTouched => isTouched),
    isTouchedNumbers,
    initValue,
  };
}

export interface UseCardNumbers {
  cardNumbers: string[];
  cardNumberOnChanges: ((event: React.ChangeEvent<HTMLInputElement>) => void)[];
  errorMessage: string;
  isValidNumberParts: boolean[];
  isValid: boolean;
  isTouched: boolean;
  isTouchedNumbers: boolean[];
  initValue: () => void;
}

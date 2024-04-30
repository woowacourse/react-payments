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

  const [wasFirstChanged, setWasChangedFirst] = useState(false);
  const [wasSecondChanged, setWasChangedSecond] = useState(false);
  const [wasThirdChanged, setWasChangedThird] = useState(false);
  const [wasFourthChanged, setWasChangedFourth] = useState(false);

  const cardNumberInputs = [
    firstCardNumberValidateInput,
    secondCardNumberValidateInput,
    thirdCardNumberValidateInput,
    fourthCardNumberValidateInput,
  ];

  const wasNumbersChanged = [
    wasFirstChanged,
    wasSecondChanged,
    wasThirdChanged,
    wasFourthChanged,
  ];

  const setWasChangedNumbers = [
    setWasChangedFirst,
    setWasChangedSecond,
    setWasChangedThird,
    setWasChangedFourth,
  ];

  const cardNumbersErrorMessage = useLastValidValue({
    checkValues: cardNumberInputs.map(input => input.errorMessage),
    invalidValues: [''],
  });

  const cardNumbers = cardNumberInputs.map(input => input.inputValue);

  const wasEveryChanged = wasNumbersChanged.every(isTouched => isTouched);
  const isEveryNoError = cardNumberInputs.every(
    input => input.errorMessage === ''
  );

  const isValid = wasEveryChanged && isEveryNoError;

  const initValue = () => {
    cardNumberInputs.forEach(el => el.initValue());
    setWasChangedNumbers.forEach(setIsTouched => setIsTouched(false));
  };

  return {
    cardNumbers,
    cardNumberOnChanges: cardNumberInputs.map((input, idx) => {
      return (event: React.ChangeEvent<HTMLInputElement>) => {
        setWasChangedNumbers[idx](true);
        input.onChange(event);
      };
    }),
    errorMessage: cardNumbersErrorMessage ?? '',
    isValidNumberParts: cardNumberInputs.map(
      (input, idx) => input.errorMessage === '' && wasNumbersChanged[idx]
    ),
    isValid,
    wasNumbersChanged,
    initValue,
  };
}

export interface UseCardNumbers {
  cardNumbers: string[];
  cardNumberOnChanges: ((event: React.ChangeEvent<HTMLInputElement>) => void)[];
  errorMessage: string;
  isValidNumberParts: boolean[];
  isValid: boolean;
  wasNumbersChanged: boolean[];
  initValue: () => void;
}

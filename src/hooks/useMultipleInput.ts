import { useState } from 'react';
import {
  isInputNumber,
  isNextInputFocusable,
  isOverLength,
} from '../utils/InputValidate';
import { ERROR_MESSAGE } from '../utils/Constants';

export const useMultipleInput = (
  numberOfInputs: number,
  inputRefs: React.MutableRefObject<HTMLInputElement>[],
  maxLength: number
) => {
  const [value, setValue] = useState(Array(numberOfInputs).fill(''));
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangeInput =
    (inputIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;

      if (isOverLength(inputValue, maxLength)) return;
      if (isInputNumber(inputValue, maxLength)) {
        setErrorMessage(ERROR_MESSAGE.ONLY_NUMBER);
        return;
      }

      const newValue = [...value];
      newValue[inputIndex] = inputValue;

      if (
        isNextInputFocusable({
          inputValue,
          inputIndex,
          maxLength,
        })
      ) {
        const nextInputRef = inputRefs[inputIndex + 1];
        if (nextInputRef?.current) {
          nextInputRef.current.focus();
        }
      }

      setValue(newValue);
      setErrorMessage('');
    };

  return { value, errorMessage, handleChangeInput };
};

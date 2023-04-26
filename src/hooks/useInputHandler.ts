import { useFocus } from './useFocus';
import { changeToValidValue } from 'utils/inputValidator';
import { ChangeEvent } from 'react';

export const useInputHandler = <T>(
  setInputState: React.Dispatch<React.SetStateAction<T>>,
  inputConfig: {
    length: number;
    regex: RegExp;
    validator?: (target: string, value: string) => string;
  }
) => {
  const { handleRef, moveFocus } = useFocus();

  const handleInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    let value = target.value;

    if (inputConfig.validator) {
      value = inputConfig.validator(target.name, value);
    }

    setInputState((prevState: T) => {
      return {
        ...prevState,
        [target.name]: changeToValidValue(value, {
          length: inputConfig.length,
          regex: inputConfig.regex,
        }),
      };
    });

    moveFocus(target, inputConfig.length);
  };

  return { handleInput, handleRef };
};

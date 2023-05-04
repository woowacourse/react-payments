import { useState } from 'react';
import type { FocusEventHandler } from 'react';

type IsError = boolean;
type HandleInputFocusEvent = FocusEventHandler<HTMLInputElement>;

type UseInputError = [IsError, HandleInputFocusEvent, HandleInputFocusEvent];

const useInputError = (): UseInputError => {
  const [isError, setIsError] = useState(false);

  const handleInputFocus: FocusEventHandler<HTMLInputElement> = () => {
    setIsError(false);
  };

  const handleInputBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    const { value, maxLength } = event.currentTarget;

    if (value.length < maxLength) {
      setIsError(true);
    }
  };

  return [isError, handleInputFocus, handleInputBlur];
};

export default useInputError;

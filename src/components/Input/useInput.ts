import { ChangeEvent, useState } from 'react';

import debounceFunc from '../../utils/debounceFunc';

type InputValue = string | number | readonly string[] | undefined;
export interface UseInputProps {
  initialValue: InputValue;
  maxLength?: number;
  extraHandleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function useInput(props: UseInputProps) {
  const { initialValue, maxLength } = props;
  const [value, setValue] = useState<InputValue>(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    const newValue = maxLength
      ? targetValue.slice(0, maxLength + 1)
      : targetValue;

    debounceFunc(() => {
      setValue(newValue);
    }, 10);
  };

  return { value, handleChange };
}

export default useInput;

import { ChangeEvent, useState } from 'react';

import debounceFunc from '../../utils/debounceFunc';

type InputValue = string | number | readonly string[] | undefined;
interface UseInputProps {
  initialValue: InputValue;
  extraHandleChange?: (value: string) => void;
}

function useInput(props: UseInputProps) {
  const { initialValue, extraHandleChange } = props;
  const [value, setValue] = useState<InputValue>(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;

    debounceFunc(() => {
      setValue(targetValue);
      if (targetValue && extraHandleChange) extraHandleChange(targetValue);
    });
  };

  return { value, handleChange };
}

export default useInput;

import { ChangeEvent, useState } from 'react';

type InputValue = string | number | readonly string[] | undefined;
interface UseInputProps {
  initialValue: InputValue;
  maxLength?: number;
  extraHandleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function useInput(props: UseInputProps) {
  const { initialValue, extraHandleChange, maxLength } = props;
  const [value, setValue] = useState<InputValue>(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    const newValue = maxLength
      ? targetValue.slice(0, maxLength + 1)
      : targetValue;
    setValue(newValue);
    if (extraHandleChange) extraHandleChange(e);

    // TODO: 디바운스 적용하면 value의 마지막 글자를 읽어오지 못함
    // debounceFunc(() => {
    //   const newValue = maxLength
    //     ? targetValue.slice(0, maxLength + 1)
    //     : targetValue;
    //   setValue(newValue);
    //   if (extraHandleChange) extraHandleChange(e);
    // }, 20);
  };

  return { value, handleChange };
}

export default useInput;

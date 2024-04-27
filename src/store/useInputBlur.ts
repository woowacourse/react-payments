import useShow from './useShow';
import useInputs from './useInputs';
import { useState } from 'react';

interface UseInputsParams<T> {
  values: T;
  errorMessages: { [K in keyof T]?: string };
}

const useInputBlur = <T extends object>(initialValue: UseInputsParams<T>) => {
  const { valueInit, error, handleOnChange } = useInputs(initialValue);
  const [blur, setBlur] = useState<boolean>(false);

  const { pass } = useShow({ valueInit, error, showInit: false, blur });

  return { pass, valueInit, handleOnChange, error, setBlur };
};

export default useInputBlur;

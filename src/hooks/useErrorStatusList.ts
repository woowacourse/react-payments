import { useState } from 'react';
import type { Validate } from '../types.ts';

export const useErrorStatusList = <T>(validates: Validate<T>[], initialState: T[]) => {
  const [errorStatusList, setErrorStatusList] = useState<T[]>(initialState);

  const setErrorStatus = (status: T, index: number) => {
    setErrorStatusList((prev) => {
      const updated = [...prev] as T[];
      updated[index] = status;
      return updated;
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const inputValue = e.target.value;

    const changeValidates = validates.filter((validate) => validate.type.includes('change'));
    const activeValidate = changeValidates.find((validate) => validate.rule(inputValue, index));

    setErrorStatus(activeValidate?.errorStatus ?? null, index);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>, index: number) => {
    const inputValue = e.target.value;

    const blurValidates = validates.filter((validate) => validate.type.includes('blur'));
    const activeValidate = blurValidates.find((validate) => validate.rule(inputValue));

    if (activeValidate) {
      setErrorStatus(activeValidate.errorStatus, index);
    }
  };

  return { errorStatusList, onChange, onBlur };
};

import { useState } from 'react';
import type { Validate } from '../types.ts';

export const useErrorStatusList = <K>(validates: Validate<K>[], length: number) => {
  const [errorStatusList, setErrorStatusList] = useState<K[]>(new Array(length).fill(null));

  const setErrorStatus = (status: string, index: number) => {
    setErrorStatusList((prev) => {
      const updated = [...prev] as K[];
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

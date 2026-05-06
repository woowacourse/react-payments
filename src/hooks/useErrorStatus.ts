import { useState } from 'react';
import type { Validate } from '../types.ts';

export const useErrorStatus = <K>(validates: Validate<K>[]) => {
  const [errorStatus, setErrorStatus] = useState<K>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    const changeValidates = validates.filter((validate) => validate.type.includes('change'));
    const activeValidate = changeValidates.find((validate) => validate.rule(inputValue));

    setErrorStatus(activeValidate?.errorStatus ?? null);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    const blurValidates = validates.filter((validate) => validate.type.includes('blur'));
    const activeValidate = blurValidates.find((validate) => validate.rule(inputValue));

    if (activeValidate) {
      setErrorStatus(activeValidate.errorStatus);
    }
  };

  return { errorStatus, onChange, onBlur };
};

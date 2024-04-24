import useValidations from './useValidations';
import { IErrorStatus } from '../validators/index.d';
import { useState } from 'react';

type TValidate = (value: string) => IErrorStatus;

const useInputs = (validate: TValidate, initialValue: Record<string, string>) => {
  const [value, setValue] = useState<Record<string, string>>(initialValue);
  const { errorStatus, validateValue } = useValidations(value, validate);

  const register = (key: string) => {
    if (value[key] === undefined) {
      throw Error('등록되지 않은 key입니다.');
    }

    return {
      value: value[key],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        validateValue(key, e.target.value);
        setValue({ ...value, [key]: e.target.value });
      },
    };
  };

  return { value, setValue, errorStatus, validateValue, register };
};

export default useInputs;

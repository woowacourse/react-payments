import { useRef, useState } from 'react';
import { ErrorDetail } from '../types/error';
import { CardNumberKey } from '../types/card';
import { INITIAL_ERROR_VALUE } from '../constants/error';
import { convertArrayIntoObject } from '../utils/util';

const NEXT_INPUT_FIELD = {
  first: 'second',
  second: 'third',
  third: 'fourth',
} as const;

interface ValidateProps {
  onChange: (value: string) => ErrorDetail;
  onBlur: (value: string) => ErrorDetail;
}

const useInputs = <T extends Record<string, string>>(initialValue: T, validate: ValidateProps) => {
  const initialErrorStatus = convertArrayIntoObject(Object.keys(initialValue), INITIAL_ERROR_VALUE);
  const [value, setValue] = useState(initialValue);
  const [errorInfo, setErrorInfo] = useState(initialErrorStatus);
  const inputRefs = {
    first: useRef<HTMLInputElement>(null),
    second: useRef<HTMLInputElement>(null),
    third: useRef<HTMLInputElement>(null),
    fourth: useRef<HTMLInputElement>(null),
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const validationResult = validate.onChange(e.target.value);
    if (e.target.value.length === e.target.maxLength && !validationResult.isError) {
      const key = name as keyof typeof NEXT_INPUT_FIELD;
      if (NEXT_INPUT_FIELD[key]) {
        inputRefs[NEXT_INPUT_FIELD[key]].current?.focus();
      }
    }
    setErrorInfo({
      ...errorInfo,
      [name]: {
        ...validationResult,
      },
    });
    if (validationResult.isError) return;
    setValue({
      ...value,
      [name]: e.target.value,
    });
  };

  const handleBlur = (key: CardNumberKey) => {
    if (validate) {
      const validationResult = validate.onBlur(value[key]);

      setErrorInfo({
        ...errorInfo,
        [key]: {
          ...validationResult,
        },
      });
    }
  };

  return {
    value,
    setValue,
    handleChange,
    handleBlur,
    errorInfo,
    inputRefs,
  };
};

export default useInputs;

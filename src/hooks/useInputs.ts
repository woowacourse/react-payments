import { useState } from 'react';
import { ErrorDetail } from '../types/error';
import { CardNumberKey } from '../types/card';
import { INITIAL_ERROR_VALUE } from '../constants/error';
import { convertArrayIntoObject } from '../utils/util';

interface ValidateProps {
  onChange: (value: string) => ErrorDetail;
  onBlur: (value: string) => ErrorDetail;
}

const useInputs = <T extends Record<string, string>>(initialValue: T, validate: ValidateProps) => {
  const initialErrorStatus = convertArrayIntoObject(Object.keys(initialValue), INITIAL_ERROR_VALUE);
  const [value, setValue] = useState(initialValue);
  const [errorInfo, setErrorInfo] = useState(initialErrorStatus);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const validationResult = validate.onChange(e.target.value);
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
  };
};

export default useInputs;

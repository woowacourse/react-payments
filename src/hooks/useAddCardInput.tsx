import { useState } from 'react';

type InitialValuesType = CardNumbers | ExpirationDate | OwnerName;

interface useAddCardInputProps<T extends InitialValuesType> {
  initialValues: T;
  initialErrors: Record<keyof T, boolean>;
  validateInputOnChange: ({
    name,
    value,
  }: {
    name?: string;
    value: string;
  }) => {
    isValid: boolean;
    errorMsg: string;
  };
  validateInputOnBlur?: ({ name, value }: { name?: string; value: string }) => {
    isValid: boolean;
    errorMsg: string;
  };
  processData: () => void;
}

export default function useAddCardInput<T extends InitialValuesType>({
  validateInputOnChange,
  validateInputOnBlur,
  processData,
  initialValues,
  initialErrors,
}: useAddCardInputProps<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [isError, setIsError] =
    useState<Record<keyof T, boolean>>(initialErrors);
  const [errMsg, setErrMsg] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const validation = validateInputOnChange({ name, value });

    if (!validation.isValid) {
      setErrMsg(validation.errorMsg);
      setIsError({ ...isError, [name]: true });
    } else {
      setErrMsg('');
      setIsError({ ...isError, [name]: false });
      setValues({ ...values, [name]: value });
    }
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (validateInputOnBlur) {
      const validation = validateInputOnBlur({ name, value });
      if (!validation.isValid) {
        setErrMsg(validation.errorMsg);
        setIsError({ ...isError, [name]: true });
      } else {
        setErrMsg('');
        setIsError({ ...isError, [name]: false });
        processData();
      }
    } else {
      processData();
    }
  };

  return {
    values,
    errMsg,
    isError,
    onChange,
    onBlur,
  };
}

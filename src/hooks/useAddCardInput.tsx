import { useState } from 'react';

type InitialValuesType = CardNumbers | ExpirationDate | OwnerName;

export type InputType = {
  name?: string;
  value: string;
};

interface UseAddCardInputProps<T extends InitialValuesType> {
  initialValues: T;
  initialErrors: Record<keyof T, boolean>;
  validateInputOnChange: ({ name, value }: InputType) => {
    isValid: boolean;
    errorMsg: string;
  };
  validateInputOnBlur?: ({ name, value }: InputType) => {
    isValid: boolean;
    errorMsg: string;
  };
  updateCardData: () => void;
}

export default function useAddCardInput<T extends InitialValuesType>({
  validateInputOnChange,
  validateInputOnBlur,
  updateCardData,
  initialValues,
  initialErrors,
}: UseAddCardInputProps<T>) {
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
      setValues({
        ...values,
        [name]: name === 'ownerName' ? value.toUpperCase() : value,
      });
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
        updateCardData();
      }
    } else {
      updateCardData();
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

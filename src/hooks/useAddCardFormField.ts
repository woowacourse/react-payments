import { useState } from 'react';
import { createObjectWithKeys } from '../utils/createObjectWithKeys';

type InitialValuesType =
  | CardNumbers
  | ExpirationDate
  | OwnerName
  | CardIssuer
  | CVC
  | Password;

export interface CustomInputHandlerProps<T> {
  isValid: boolean;
  errorMessage: string;
  name: keyof T;
  value: string;
}

interface UseAddCardFormFieldProps<T extends InitialValuesType> {
  initialValues: T;
}

export default function useAddCardFormField<T extends InitialValuesType>({
  initialValues,
}: UseAddCardFormFieldProps<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(
    createObjectWithKeys(Object.keys(initialValues), false)
  );

  const onChange = ({
    isValid,
    errorMessage,
    name,
    value,
  }: CustomInputHandlerProps<T>) => {
    if (!isValid) {
      setErrorMessage(errorMessage);
      setIsError({ ...isError, [name]: true });
    } else {
      setErrorMessage('');
      setIsError({ ...isError, [name]: false });

      setValues({
        ...values,
        [name]: name === 'ownerName' ? value.toUpperCase() : value,
      });
    }
  };

  const onBlur = ({
    isValid,
    errorMessage,
    name,
  }: CustomInputHandlerProps<T>) => {
    if (!isValid) {
      setErrorMessage(errorMessage);
      setIsError({ ...isError, [name]: true });
    } else {
      setErrorMessage('');
      setIsError({ ...isError, [name]: false });
    }
  };

  return {
    values,
    errorMessage,
    isError,
    onChange,
    onBlur,
  };
}

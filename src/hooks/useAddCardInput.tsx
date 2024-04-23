import { useState } from 'react';
import { createObjectWithKeys } from '../utils/createObjectWithKeys';

type InitialValuesType = CardNumbers | ExpirationDate | OwnerName;

export type InputType = {
  name?: string;
  value: string;
};

interface UseAddCardInputProps<T extends InitialValuesType> {
  initialValues: T;
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
  initialValues,
  validateInputOnBlur,
  validateInputOnChange,
  updateCardData,
}: UseAddCardInputProps<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(
    createObjectWithKeys(Object.keys(initialValues), false)
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const validation = validateInputOnChange({ name, value });

    if (!validation.isValid) {
      setErrorMessage(validation.errorMsg);
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

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (validateInputOnBlur) {
      const validation = validateInputOnBlur({ name, value });

      if (!validation.isValid) {
        setErrorMessage(validation.errorMsg);
        setIsError({ ...isError, [name]: true });
      } else {
        setErrorMessage('');
        setIsError({ ...isError, [name]: false });
        updateCardData();
      }
    } else {
      updateCardData();
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

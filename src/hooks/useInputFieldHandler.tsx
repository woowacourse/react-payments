import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import {
  CardNumberInputType,
  CVCInputValueType,
  ExpirationDateInputType,
  PasswordInputType,
} from '../config/inputField';
import { ErrorType } from '../config/error';

interface useInputFieldHandlerProps<
  T extends
    | CardNumberInputType
    | CVCInputValueType
    | ExpirationDateInputType
    | PasswordInputType,
> {
  validateInputError?: (
    inputName: T,
    errorStatus: { errorType: ErrorType; isError: boolean }
  ) => void;
  setInputValue: Dispatch<SetStateAction<Record<T, string>>>;
  maxLength: number;
  inputErrorType: ErrorType;
}

export function useInputFieldHandler<
  T extends
    | CardNumberInputType
    | CVCInputValueType
    | ExpirationDateInputType
    | PasswordInputType,
>({
  validateInputError,
  setInputValue,
  maxLength,
  inputErrorType,
}: useInputFieldHandlerProps<T>) {
  const onChange = ({ name, value }: { name: string; value: string }) => {
    if (value.length > maxLength) return;
    setInputValue((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const onBlur = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    validateInputError &&
      validateInputError(name as T, {
        errorType: inputErrorType,
        isError: value.length < maxLength,
      });
  };

  return { onChange, onBlur };
}

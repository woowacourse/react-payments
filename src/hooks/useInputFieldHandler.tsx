import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { ErrorType } from '../config/error';
import { InputFieldType } from '../config/inputField';

interface useInputFieldHandlerProps<T extends InputFieldType> {
  validateInputError?: (
    inputName: T,
    errorStatus: { errorType: ErrorType; isError: boolean }
  ) => void;
  setInputValue: Dispatch<SetStateAction<Record<T, string>>>;
  maxLength: number;
  inputErrorType: ErrorType;
}

export function useInputFieldHandler<T extends InputFieldType>({
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

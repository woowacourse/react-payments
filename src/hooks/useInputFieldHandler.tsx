import { ChangeEvent, Dispatch, RefObject, SetStateAction } from 'react';
import { ErrorType } from '../config/error';
import {
  FieldName,
  INPUT_FIELD_MAX_LENGTH,
  InputFieldType,
} from '../config/inputField';

const INPUT_ERROR_TYPE: Record<FieldName, ErrorType> = {
  cardNumber: 'shortCardSegment',
  CVC: 'shortCVCSegment',
  expirationDate: 'expirationDateSegment',
  password: 'shortPasswordSegment',
};

const INPUT_NAME_TO_INDEX: Record<InputFieldType, number> = {
  cardNumberPart1: 0,
  cardNumberPart2: 1,
  cardNumberPart3: 2,
  cardNumberPart4: 3,
  CVCPart1: 0,
  expirationDatePart1: 0,
  expirationDatePart2: 1,
  passwordPart1: 0,
};

export interface onChangeProps {
  name: InputFieldType;
  value: string;
}

interface useInputFieldHandlerProps<T extends InputFieldType> {
  fieldName: FieldName;
  inputRefs: RefObject<(HTMLInputElement | null)[]>;
  validateInputError?: (
    inputName: T,
    errorStatus: { errorType: ErrorType; isError: boolean }
  ) => void;
  setInputValue: Dispatch<SetStateAction<Record<T, string>>>;
}

export function useInputFieldHandler<T extends InputFieldType>({
  fieldName,
  inputRefs,
  validateInputError,
  setInputValue,
}: useInputFieldHandlerProps<T>) {
  const maxLength = INPUT_FIELD_MAX_LENGTH[fieldName];

  const onChange = ({ name, value }: onChangeProps) => {
    if (value.length > maxLength) return;
    setInputValue((prevValue) => ({ ...prevValue, [name]: value }));

    const nextIndex = INPUT_NAME_TO_INDEX[name] + 1;
    if (!inputRefs.current[nextIndex]) return;

    if (value.length === maxLength) {
      inputRefs.current[INPUT_NAME_TO_INDEX[name] + 1]?.focus();
    }
  };

  const onBlur = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    validateInputError?.(name as T, {
      errorType: INPUT_ERROR_TYPE[fieldName],
      isError: value.length < maxLength,
    });
  };

  return { onChange, onBlur };
}

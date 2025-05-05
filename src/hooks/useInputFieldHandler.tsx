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

const FIELD_UNIT_COUNT: Record<FieldName, number> = {
  cardNumber: 4,
  CVC: 1,
  expirationDate: 2,
  password: 1,
};

const MAX_VALID_MONTH = 12;

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
  const inputFieldLength = FIELD_UNIT_COUNT[fieldName];

  const onChange = ({
    name,
    value,
  }: {
    name: InputFieldType;
    value: string;
  }) => {
    if (value.length > maxLength) return;
    if (
      fieldName === 'expirationDate' &&
      name === 'expirationDatePart1' &&
      Number(value) > MAX_VALID_MONTH
    )
      return;

    setInputValue((prevValue) => ({ ...prevValue, [name]: value }));

    if (value.length === maxLength) {
      const inputPart = Number(name.match(/\d+/)?.[0]) - 1;
      if (inputPart < inputFieldLength)
        inputRefs.current[inputPart + 1]?.focus();
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

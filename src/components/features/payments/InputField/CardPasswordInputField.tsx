import { ChangeEvent, RefObject } from 'react';
import BaseInputField from '../../../common/BaseInputField/BaseInputField';
import Input from '../../../common/Input/Input';
import { ERROR_TYPE_TO_MESSAGE, ErrorType } from '../config/error';

interface CardPasswordInputFieldProps {
  inputValue: string;
  inputRef: RefObject<HTMLInputElement | null>;
  errorTypes: ErrorType[];
  handleInputValue: (value: string) => void;
  onBlur: (e: ChangeEvent) => void;
}

function CardPasswordInputField({
  inputValue,
  inputRef,
  errorTypes,
  handleInputValue,
  onBlur,
}: CardPasswordInputFieldProps) {
  const errorMessage =
    errorTypes.length !== 0 ? ERROR_TYPE_TO_MESSAGE[errorTypes[0]] : '';

  return (
    <BaseInputField label="비밀번호 앞 2자리" errorMessage={errorMessage}>
      <Input
        inputType="password"
        name="CardPassword"
        ref={inputRef}
        value={inputValue}
        onChange={({ value }) => handleInputValue(value)}
        onBlur={onBlur}
        isError={Boolean(errorTypes.length)}
      />
    </BaseInputField>
  );
}

export default CardPasswordInputField;

import { ChangeEvent, RefObject } from 'react';
import { BaseInputField } from '../../../common/BaseInputField';
import { Input } from '../../../common/Input';
import { ErrorType } from '../config/error';
import { getFirstErrorMessage } from '../utils/error';

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
  const errorMessage = getFirstErrorMessage(errorTypes);

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

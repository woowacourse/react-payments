import { ChangeEvent, RefObject } from 'react';
import { BaseInputField } from '../../../common/BaseInputField';
import Input from '../../../common/Input/Input';
import { ERROR_TYPE_TO_MESSAGE, ErrorType } from '../config/error';

interface CVCInputFieldProps {
  inputValue: string;
  inputRef: RefObject<HTMLInputElement | null>;
  errorTypes: ErrorType[];
  handleInputValue: (value: string) => void;
  onBlur: (e: ChangeEvent) => void;
}

function CVCInputField({
  inputValue,
  inputRef,
  errorTypes,
  handleInputValue,
  onBlur,
}: CVCInputFieldProps) {
  const errorMessage =
    errorTypes.length !== 0 ? ERROR_TYPE_TO_MESSAGE[errorTypes[0]] : '';

  return (
    <BaseInputField label="CVC" errorMessage={errorMessage}>
      <Input
        inputType="number"
        placeholder="123"
        name="CVC"
        ref={inputRef}
        value={inputValue}
        onChange={({ value }) => handleInputValue(value)}
        onBlur={onBlur}
        isError={Boolean(errorTypes.length)}
      />
    </BaseInputField>
  );
}

export default CVCInputField;

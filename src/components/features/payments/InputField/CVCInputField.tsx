import { ChangeEvent, RefObject } from 'react';
import { BaseInputField } from '../../../common/BaseInputField';
import Input from '../../../common/Input/Input';
import { ErrorType } from '../config/error';
import { getFirstErrorMessage } from '../utils/error';

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
  const errorMessage = getFirstErrorMessage(errorTypes);

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

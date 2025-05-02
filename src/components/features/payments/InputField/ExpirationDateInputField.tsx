import { ChangeEvent, RefObject } from 'react';
import { BaseInputField } from '../../../common/BaseInputField';
import { Input } from '../../../common/Input';
import {
  EXPIRATION_DATE_INPUT_PLACEHOLDER,
  EXPIRATION_DATE_INPUT_TYPE,
  ExpirationDateInputType,
} from '../config/inputField';

interface ExpirationDateInputFieldProps {
  inputValues: Record<ExpirationDateInputType, string>;
  inputRefs: Record<
    ExpirationDateInputType,
    RefObject<HTMLInputElement | null>
  >;
  handleInputValue: ({
    name,
    value,
  }: {
    name: ExpirationDateInputType;
    value: string;
  }) => void;
  onBlur: (e: ChangeEvent) => void;
}

function ExpirationDateInputField({
  inputValues,
  inputRefs,
  handleInputValue,
  onBlur,
}: ExpirationDateInputFieldProps) {
  return (
    <BaseInputField label="유효기간">
      {Object.values(EXPIRATION_DATE_INPUT_TYPE).map((inputType) => (
        <Input
          key={inputType}
          inputType="number"
          placeholder={EXPIRATION_DATE_INPUT_PLACEHOLDER[inputType]}
          name={inputType}
          ref={inputRefs[inputType]}
          value={inputValues[inputType]}
          onChange={handleInputValue}
          onBlur={onBlur}
        />
      ))}
    </BaseInputField>
  );
}

export default ExpirationDateInputField;

import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import BaseInputField from '../BaseInputField';
import Input from '../Input';
import {
  EXPIRATION_DATE_INPUT_TYPE,
  ExpirationDateInputType,
} from '../config/inputField';

interface ExpirationDateInputFieldProps {
  inputValue: Record<ExpirationDateInputType, string>;
  setInputValue: Dispatch<
    SetStateAction<Record<ExpirationDateInputType, string>>
  >;
}

function ExpirationDateInputField({
  inputValue,
  setInputValue,
}: ExpirationDateInputFieldProps) {
  const onChange = ({ name, value }: { name: string; value: string }) => {
    if (value.length <= 2) {
      if (name === 'expirationDatePart1' && Number(value) > 12) return;
      setInputValue((prevValue) => ({ ...prevValue, [name]: value }));
    }
  };

  const onBlur = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    if (value.length === 1)
      setInputValue({ ...inputValue, [name]: `0${value}` });
  };

  return (
    <BaseInputField label="유효기간">
      {EXPIRATION_DATE_INPUT_TYPE.map((inputType) => (
        <Input
          key={inputType}
          type="number"
          placeholder={expirationDateInputPlaceholder[inputType]}
          value={inputValue[inputType]}
          onChange={onChange}
          name={inputType}
          onBlur={onBlur}
        />
      ))}
    </BaseInputField>
  );
}

export default ExpirationDateInputField;

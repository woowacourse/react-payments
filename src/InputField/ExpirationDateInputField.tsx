import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import BaseInputField from '../BaseInputField';
import Input from '../Input';
import { ExpirationDateInputValueType } from '../types/inputFieldType';

function ExpirationDateInputField({
  inputValue,
  setInputValue,
}: {
  inputValue: Record<ExpirationDateInputValueType, string>;
  setInputValue: Dispatch<
    SetStateAction<Record<ExpirationDateInputValueType, string>>
  >;
}) {
  const onChange = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    const numericValue = value.replace(/[^0-9]/g, '');

    if (numericValue.length <= 2) {
      if (name === 'expirationDatePart1' && Number(numericValue) > 12) return;
      setInputValue((prevValue) => ({ ...prevValue, [name]: numericValue }));
    }
  };

  const onBlur = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    if (value.length === 1)
      setInputValue({ ...inputValue, [name]: `0${value}` });
  };

  return (
    <BaseInputField label="유효기간">
      <Input
        inputMode="numeric"
        placeholder="MM"
        value={inputValue.expirationDatePart1}
        onChange={onChange}
        name="expirationDatePart1"
        onBlur={onBlur}
      />
      <Input
        inputMode="numeric"
        placeholder="YY"
        value={inputValue.expirationDatePart2}
        onChange={onChange}
        name="expirationDatePart2"
        onBlur={onBlur}
      />
    </BaseInputField>
  );
}

export default ExpirationDateInputField;

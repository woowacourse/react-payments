import { ChangeEvent, useState } from 'react';
import BaseInputField from '../BaseInputField';
import Input from '../Input';

function ExpirationDateInputField() {
  const [inputValue, setInputValue] = useState({
    ExpirationDatePart1: '',
    ExpirationDatePart2: '',
  });

  const onChange = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    const numericValue = value.replace(/[^0-9]/g, '');

    if (numericValue.length <= 2) {
      if (name === 'ExpirationDatePart1' && Number(numericValue) > 12) return;
      setInputValue({ ...inputValue, [name]: numericValue });
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
        value={inputValue.ExpirationDatePart1}
        onChange={onChange}
        name="ExpirationDatePart1"
        onBlur={onBlur}
      />
      <Input
        inputMode="numeric"
        placeholder="YY"
        value={inputValue.ExpirationDatePart2}
        onChange={onChange}
        name="ExpirationDatePart2"
        onBlur={onBlur}
      />
    </BaseInputField>
  );
}

export default ExpirationDateInputField;

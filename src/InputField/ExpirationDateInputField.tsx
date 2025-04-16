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
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <BaseInputField label="유효기간">
      <Input
        placeholder="MM"
        value={inputValue.ExpirationDatePart1}
        onChange={onChange}
        name="ExpirationDatePart1"
      />
      <Input
        placeholder="YY"
        value={inputValue.ExpirationDatePart2}
        onChange={onChange}
        name="ExpirationDatePart2"
      />
    </BaseInputField>
  );
}

export default ExpirationDateInputField;

import { ChangeEvent, useState } from 'react';
import BaseInputField from '../BaseInputField';
import Input from '../Input';

function CVCInputField() {
  const [inputValue, setInputValue] = useState({
    CVCPart1: '',
  });

  const onChange = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    const numericValue = value.replace(/[^0-9]/g, '');

    if (numericValue.length <= 3)
      setInputValue({ ...inputValue, [name]: numericValue });
  };

  return (
    <BaseInputField label="CVC">
      <Input
        inputMode="numeric"
        placeholder="123"
        value={inputValue.CVCPart1}
        onChange={onChange}
        name="CVCPart1"
      />
    </BaseInputField>
  );
}

export default CVCInputField;

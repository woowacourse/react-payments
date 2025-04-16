import { ChangeEvent, useState } from 'react';
import BaseInputField from '../BaseInputField';
import Input from '../Input';

function CVCInputField() {
  const [inputValue, setInputValue] = useState({
    CVCPart1: '',
  });

  const onChange = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    if (value.length <= 3) setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <BaseInputField label="CVC">
      <Input
        type="number"
        placeholder="123"
        value={inputValue.CVCPart1}
        onChange={onChange}
        name="CVCPart1"
      />
    </BaseInputField>
  );
}

export default CVCInputField;

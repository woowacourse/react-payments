import { ChangeEvent, useState } from 'react';
import BaseInputField from '../BaseInputField';
import Input from '../Input';

function CardNumberInputField() {
  const [inputValue, setInputValue] = useState({
    CardNumberPart1: '',
    CardNumberPart2: '',
    CardNumberPart3: '',
    CardNumberPart4: '',
  });

  const onChange = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <BaseInputField label="카드 번호">
      <Input
        type="number"
        placeholder="1234"
        value={inputValue.CardNumberPart1}
        onChange={onChange}
        name="CardNumberPart1"
      />
      <Input
        type="number"
        placeholder="1234"
        value={inputValue.CardNumberPart2}
        onChange={onChange}
        name="CardNumberPart2"
      />
      <Input
        type="number"
        placeholder="1234"
        value={inputValue.CardNumberPart3}
        onChange={onChange}
        name="CardNumberPart3"
      />
      <Input
        type="number"
        placeholder="1234"
        value={inputValue.CardNumberPart4}
        onChange={onChange}
        name="CardNumberPart4"
      />
    </BaseInputField>
  );
}

export default CardNumberInputField;

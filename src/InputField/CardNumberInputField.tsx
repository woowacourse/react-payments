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
    const numericValue = value.replace(/[^0-9]/g, '');
    console.log(value, numericValue);

    if (numericValue.length <= 4)
      setInputValue({ ...inputValue, [name]: numericValue });
  };

  return (
    <BaseInputField label="카드 번호">
      <Input
        inputMode="numeric"
        placeholder="1234"
        value={inputValue.CardNumberPart1}
        onChange={onChange}
        name="CardNumberPart1"
      />
      <Input
        inputMode="numeric"
        placeholder="1234"
        value={inputValue.CardNumberPart2}
        onChange={onChange}
        name="CardNumberPart2"
      />
      <Input
        inputMode="numeric"
        placeholder="1234"
        value={inputValue.CardNumberPart3}
        onChange={onChange}
        name="CardNumberPart3"
      />
      <Input
        inputMode="numeric"
        placeholder="1234"
        value={inputValue.CardNumberPart4}
        onChange={onChange}
        name="CardNumberPart4"
      />
    </BaseInputField>
  );
}

export default CardNumberInputField;

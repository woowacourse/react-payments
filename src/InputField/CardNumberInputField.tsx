import { ChangeEvent, useState } from 'react';
import BaseInputField from '../BaseInputField';
import Input from '../Input';

function CardNumberInputField() {
  const [inputValue, setInputValue] = useState({
    cardNumberPart1: '',
    cardNumberPart2: '',
    cardNumberPart3: '',
    cardNumberPart4: '',
  });

  const [cardType, setCardType] = useState<'visa' | 'master' | null>(null);

  const onChange = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    const numericValue = value.replace(/[^0-9]/g, '');

    if (numericValue.length <= 4) {
      if (name === 'cardNumberPart1' && value.length <= 2) {
        if (value[0] === '4') setCardType('visa');
        else if (value >= '51' && value <= '55') setCardType('master');
        else setCardType(null);
      }
      setInputValue({ ...inputValue, [name]: numericValue });
    }
  };

  return (
    <BaseInputField label="카드 번호">
      <Input
        inputMode="numeric"
        placeholder="1234"
        value={inputValue.cardNumberPart1}
        onChange={onChange}
        name="cardNumberPart1"
      />
      <Input
        inputMode="numeric"
        placeholder="1234"
        value={inputValue.cardNumberPart2}
        onChange={onChange}
        name="cardNumberPart2"
      />
      <Input
        inputMode="numeric"
        placeholder="1234"
        value={inputValue.cardNumberPart3}
        onChange={onChange}
        name="cardNumberPart3"
      />
      <Input
        inputMode="numeric"
        placeholder="1234"
        value={inputValue.cardNumberPart4}
        onChange={onChange}
        name="cardNumberPart4"
      />
    </BaseInputField>
  );
}

export default CardNumberInputField;

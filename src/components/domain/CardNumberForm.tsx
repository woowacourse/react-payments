import { useRef } from 'react';
import NumberInput from '../common/NumberInput';
import {
  NumberInputForm,
  Label,
  NumberInputContainer,
  ErrorText,
} from '../../styles/CardForm.styles';
import useCardNumberValidation from '../../hooks/Validation/useCardNumberValidation';

interface CardNumberFormProps {
  cardInfo: CardInfo;
  handleCardInfo: (
    field: keyof CardInfo,
    value: string,
    subfield?: keyof CardNumber | keyof Expiration
  ) => void;
  maxLength: number;
}

function CardNumberForm({ cardInfo, handleCardInfo, maxLength }: CardNumberFormProps) {
  const { isCardNumberError, errorText } = useCardNumberValidation(cardInfo, maxLength);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const NumberInputInfo = [
    {
      value: cardInfo.number.first,
      setValue: (value: string) => handleCardInfo('number', value, 'first'),
    },
    {
      value: cardInfo.number.second,
      setValue: (value: string) => handleCardInfo('number', value, 'second'),
    },
    {
      value: cardInfo.number.third,
      setValue: (value: string) => handleCardInfo('number', value, 'third'),
    },
    {
      value: cardInfo.number.fourth,
      setValue: (value: string) => handleCardInfo('number', value, 'fourth'),
    },
  ];

  function handleChange(value: string, index: number) {
    NumberInputInfo[index].setValue(value);

    if (value.length === maxLength) {
      if (index === inputRefs.current.length - 1) inputRefs.current[index]?.blur();
      else inputRefs.current[index + 1]?.focus();
    }
  }

  return (
    <NumberInputForm>
      <Label>카드 번호</Label>
      <NumberInputContainer>
        {NumberInputInfo.map((inputInfo, index) => (
          <NumberInput
            key={index}
            value={inputInfo.value}
            setValue={(value: string) => handleChange(value, index)}
            maxLength={maxLength}
            placeholder="1234"
            isError={isCardNumberError[index]}
            inputRef={(element) => (inputRefs.current[index] = element)}
          />
        ))}
      </NumberInputContainer>
      <ErrorText>{errorText}</ErrorText>
    </NumberInputForm>
  );
}

export default CardNumberForm;

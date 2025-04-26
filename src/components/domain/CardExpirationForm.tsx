import NumberInput from '../common/NumberInput';
import {
  NumberInputForm,
  Label,
  NumberInputContainer,
  ErrorText,
} from '../../styles/CardForm.styles';
import useCardExpirationValidation from '../../hooks/Validation/useCardExpirationValidation';
import { useRef } from 'react';

interface CardExpirationFormProps {
  cardInfo: CardInfo;
  handleCardInfo: (
    field: keyof CardInfo,
    value: string,
    subfield?: keyof CardNumber | keyof Expiration
  ) => void;
  maxLength: number;
}

function CardExpirationForm({ cardInfo, handleCardInfo, maxLength }: CardExpirationFormProps) {
  const { isCardExpirationError, errorText } = useCardExpirationValidation(cardInfo, maxLength);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const ExpirationInputInfo = [
    {
      value: cardInfo.expiration.month,
      setValue: (value: string) => handleCardInfo('expiration', value, 'month'),
      placeholder: 'MM',
    },
    {
      value: cardInfo.expiration.year,
      setValue: (value: string) => handleCardInfo('expiration', value, 'year'),
      placeholder: 'YY',
    },
  ];

  function handleChange(value: string, index: number) {
    ExpirationInputInfo[index].setValue(value);

    if (value.length === maxLength) {
      if (index === inputRefs.current.length - 1) inputRefs.current[index]?.blur();
      else inputRefs.current[index + 1]?.focus();
    }
  }

  return (
    <NumberInputForm>
      <Label>유효기간</Label>
      <NumberInputContainer>
        {ExpirationInputInfo.map((inputInfo, index) => (
          <NumberInput
            key={index}
            value={inputInfo.value}
            setValue={(value: string) => handleChange(value, index)}
            maxLength={maxLength}
            placeholder={inputInfo.placeholder}
            isError={isCardExpirationError[index]}
            inputRef={(element) => (inputRefs.current[index] = element)}
          />
        ))}
      </NumberInputContainer>
      <ErrorText>{errorText}</ErrorText>
    </NumberInputForm>
  );
}

export default CardExpirationForm;

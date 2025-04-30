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
  const inputRefs = useRef<Partial<Record<keyof Expiration, HTMLInputElement | null>>>({});

  const handleChange = (field: keyof Expiration, value: string) => {
    handleCardInfo('expiration', value, field);

    const updatedExpiration = {
      ...cardInfo.expiration,
      [field]: value,
    };

    const { isCardExpirationError } = useCardExpirationValidation(
      { ...cardInfo, expiration: updatedExpiration },
      maxLength
    );

    if (value.length === maxLength && !isCardExpirationError[field]) {
      if (field === 'month') inputRefs.current.year?.focus();
      else inputRefs.current.year?.blur();
    }
  };

  return (
    <NumberInputForm>
      <Label>유효기간</Label>
      <NumberInputContainer>
        <NumberInput
          value={cardInfo.expiration.month}
          setValue={(value: string) => handleChange('month', value)}
          maxLength={maxLength}
          placeholder="MM"
          isError={isCardExpirationError.month}
          inputRef={(element) => (inputRefs.current.month = element)}
          autoFocus
        />
        <NumberInput
          value={cardInfo.expiration.year}
          setValue={(value: string) => handleChange('year', value)}
          maxLength={maxLength}
          placeholder="YY"
          isError={isCardExpirationError.year}
          inputRef={(element) => (inputRefs.current.year = element)}
        />
      </NumberInputContainer>
      <ErrorText>{errorText}</ErrorText>
    </NumberInputForm>
  );
}

export default CardExpirationForm;

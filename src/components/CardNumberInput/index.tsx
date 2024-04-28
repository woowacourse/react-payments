import styled from 'styled-components';
import Label from '../common/Label';
import Input from '../common/Input';

import {
  CARD_META_INFO,
  INPUT_RULES,
  VALIDATION_MESSAGES,
} from '../../constants/card-app';
import { errorCaption } from '../../utils/errorCaption';

interface CardNumberInputProps {
  cardNumbers: string[];
  cardNumberErrors: boolean[];
  onCardNumberChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
}

const CardNumberInput = ({
  cardNumbers,
  cardNumberErrors,
  onCardNumberChange,
}: CardNumberInputProps) => {
  const hasError = cardNumberErrors.some(Boolean);

  return (
    <InputField>
      <Label htmlFor='card-number-0'>{CARD_META_INFO.cardNumbers.label}</Label>
      <InputContainer>
        {Array.from({ length: cardNumbers.length }, (_, index) => (
          <Input
            key={`input-${index}`}
            id={`card-number-${index}`}
            type='text'
            placeholder='1234'
            value={cardNumbers[index]}
            maxLength={INPUT_RULES.maxCardNumberPartLength}
            size='small'
            isError={cardNumberErrors[index]}
            onChange={(e) => onCardNumberChange(e, index)}
            autoFocus={index === 0}
          />
        ))}
      </InputContainer>
      {hasError
        ? errorCaption(VALIDATION_MESSAGES.onlyNumbersAllowed)
        : errorCaption('')}
    </InputField>
  );
};

export default CardNumberInput;

const InputField = styled.section`
  height: 77px;
  width: 315px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 16px;
  margin-bottom: 16px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

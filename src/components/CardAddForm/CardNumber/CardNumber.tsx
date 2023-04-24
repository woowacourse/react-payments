import { ChangeEvent, useRef } from 'react';
import { CARD_NUMBER_INPUT_MAX_LENGTH } from '../../../constants';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';
import { useCardNumber } from '../../../hooks/useCardNumber';
import { useError } from '../../../hooks/useError';
import { encryptDisplayedCardNumber, formatDisplayedCardNumber } from '../../../utils/formatter';

interface CardNumberProps {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isValid: boolean;
}

function CardNumber({ onInputChange, value, isValid }: CardNumberProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { onInputValueChange } = useCardNumber(inputRef);
  const { isError, handleError, removeError } = useError(isValid);

  const cardNumber = formatDisplayedCardNumber(value);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    removeError();
    onInputValueChange(event);
    onInputChange(event);
  };

  return (
    <InputContainer
      supportingText={{
        error: '카드에 표시된 16자리 숫자와 동일하게 입력해주세요',
      }}
      isError={isError}
    >
      <Label htmlFor="cardNumber" required>
        카드 번호
      </Label>
      <Input
        ref={inputRef}
        id="cardNumber"
        name="cardNumber"
        value={encryptDisplayedCardNumber(cardNumber)}
        data-value={cardNumber}
        maxLength={CARD_NUMBER_INPUT_MAX_LENGTH}
        autoComplete="cc-number"
        inputMode="numeric"
        isError={isError}
        onChange={onChange}
        onBlur={handleError}
      />
    </InputContainer>
  );
}

export default CardNumber;

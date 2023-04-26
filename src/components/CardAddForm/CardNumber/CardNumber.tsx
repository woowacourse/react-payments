import { ChangeEvent, FocusEvent, memo, useRef } from 'react';
import { CardFormValidation } from '../../../types';
import { CARD_NUMBER_INPUT_MAX_LENGTH } from '../../../constants';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';
import { useCardNumber } from '../../../hooks/cards/useCardNumber';
import { useError } from '../../../hooks/common/useError';
import { encryptDisplayedCardNumber, formatDisplayedCardNumber } from '../../../utils/formatter';

interface CardNumberProps {
  value: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  updateCardInputValidation: (key: keyof CardFormValidation, value: string | string[]) => boolean;
  moveFocus: (index: number, value: string, maxLength?: number | undefined) => void;
}

function CardNumber({
  value,
  onInputChange,
  updateCardInputValidation,
  moveFocus,
}: CardNumberProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { handleInputValueChange } = useCardNumber(inputRef);
  const { isError, handleError, removeError } = useError();

  const cardNumber = formatDisplayedCardNumber(value);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    removeError();
    handleInputValueChange(event);
    onInputChange(event);
    moveFocus(event.target.tabIndex, event.currentTarget.value, event.currentTarget.maxLength);
  };

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    const isValid = updateCardInputValidation(
      event.target.name as keyof CardFormValidation,
      event.target.value
    );
    handleError(isValid);
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
        tabIndex={2}
        isError={isError}
        onChange={onChange}
        onBlur={onBlur}
      />
    </InputContainer>
  );
}

export default memo(CardNumber);

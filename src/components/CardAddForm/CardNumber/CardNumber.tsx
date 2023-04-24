import { ChangeEvent, useRef } from 'react';
import {
  CARD_NUMBER_INPUT_MAX_LENGTH,
  CARD_NUMBER_INPUT_UNIT_MAX_LENGTH,
} from '../../../constants';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';
import { useInputCursorPosition } from '../../../hooks/useInputCursorPosition';
import { useError } from '../../../hooks/useError';
import { encryptDisplayedCardNumber, formatDisplayedCardNumber } from '../../../utils/formatter';
import { checkNumberFormat } from '../../../utils/formatChecker';

interface CardNumberProps {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isValid: boolean;
}

function CardNumber({ onInputChange, value, isValid }: CardNumberProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const setCursor = useInputCursorPosition(inputRef);
  const { isError, handleError, removeError } = useError(isValid);

  const cardNumber = formatDisplayedCardNumber(value);

  const onInputCursorPositionChange = ({ target, nativeEvent }: ChangeEvent<HTMLInputElement>) => {
    if (!(nativeEvent instanceof InputEvent) || !target.selectionStart) return;

    const key = nativeEvent.data;
    const cursor =
      target.selectionStart +
      (target.selectionStart % CARD_NUMBER_INPUT_UNIT_MAX_LENGTH === 0 && key ? 1 : 0);
    setCursor(cursor);
  };

  const onInputValueChange = ({ target, nativeEvent }: ChangeEvent<HTMLInputElement>) => {
    if (
      !(nativeEvent instanceof InputEvent) ||
      target.dataset.value === undefined ||
      target.selectionStart === null
    ) {
      return;
    }

    if (nativeEvent.inputType === 'insertText') {
      const value = nativeEvent.data as string;
      target.dataset.value = checkNumberFormat(value)
        ? target.dataset.value + value
        : target.dataset.value;
    }

    if (nativeEvent.inputType === 'deleteContentBackward') {
      const modifiedValue =
        target.dataset.value.slice(0, target.selectionStart) +
        target.dataset.value.slice(target.selectionStart + 1);
      target.dataset.value = modifiedValue;
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    removeError();
    onInputValueChange(event);
    onInputCursorPositionChange(event);
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

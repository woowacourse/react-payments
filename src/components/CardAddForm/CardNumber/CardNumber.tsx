import { ChangeEvent, FocusEvent, useRef } from 'react';
import { CardInputValidation } from '../../../types';
import {
  CARD_NUMBER_INPUT_MAX_LENGTH,
  CARD_NUMBER_INPUT_UNIT_MAX_LENGTH,
} from '../../../constants';
import InputContainer from '../../common/InputContainer/InputContainer';
import Input from '../../common/Input/Input';
import { useInputCursorPosition } from '../../../hooks/useInputCursorPosition';
import { useError } from '../../../hooks/useError';
import validator from '../../../utils/validator';

interface CardNumberProps {
  changeInputValidation: (key: keyof CardInputValidation, value: boolean) => void;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

function CardNumber({ changeInputValidation, onInputChange, value }: CardNumberProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const setCursor = useInputCursorPosition(inputRef);
  const [isError, handleError] = useError<CardInputValidation>({
    validator: validator.cardNumber,
    changeInputValidation,
  });

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    handleError(event.target.name, event.target.value);
  };

  const onInputCursorPositionChange = ({ target, nativeEvent }: ChangeEvent<HTMLInputElement>) => {
    if (!(nativeEvent instanceof InputEvent) || !target.selectionStart) return;

    const key = nativeEvent.data;
    const cursor =
      target.selectionStart +
      (target.selectionStart % CARD_NUMBER_INPUT_UNIT_MAX_LENGTH === 0 && key ? 1 : 0);
    setCursor(cursor);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputCursorPositionChange(event);
    onInputChange(event);
  };

  return (
    <InputContainer
      label="카드 번호"
      id="cardNumber"
      isError={isError}
      supportingText={isError ? '카드에 표시된 16자리 숫자와 동일하게 입력해주세요' : undefined}
      required
    >
      <Input
        ref={inputRef}
        id="cardNumber"
        name="cardNumber"
        value={value}
        maxLength={CARD_NUMBER_INPUT_MAX_LENGTH}
        autoComplete="cc-csc"
        isError={isError}
        onChange={onChange}
        onBlur={onBlur}
      />
    </InputContainer>
  );
}

export default CardNumber;

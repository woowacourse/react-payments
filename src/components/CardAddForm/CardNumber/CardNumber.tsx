import { ChangeEvent, FocusEvent, memo, useRef } from 'react';
import { CARD_NUMBER_INPUT_MAX_LENGTH } from '../../../constants';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';
import { useCardNumber } from '../../../hooks/cards/useCardNumber';
import { formatNumber } from '../../../utils/formatter';

interface CardNumberProps {
  isError: boolean;
  updateInputValue: (key: string, value: any) => void;
  updateCardInputError: (key: string, value: string | string[]) => void;
}

function CardNumber({ isError, updateInputValue, updateCardInputError }: CardNumberProps) {
  const { handleInputValueChange } = useCardNumber();
  const cardNumberRef = useRef('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleInputValueChange(event, cardNumberRef);
    updateInputValue(event.target.name, formatNumber(cardNumberRef.current));
  };

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    updateCardInputError(event.target.name, formatNumber(cardNumberRef.current));
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
        id="cardNumber"
        name="cardNumber"
        data-value=""
        minLength={CARD_NUMBER_INPUT_MAX_LENGTH}
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

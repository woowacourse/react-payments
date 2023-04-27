import { ChangeEvent, FocusEvent, memo } from 'react';
import { CARD_NUMBER_INPUT_MAX_LENGTH } from '../../../constants';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';
import { useCardNumber } from '../../../hooks/cards/useCardNumber';
import { encryptDisplayedCardNumber, formatDisplayedCardNumber } from '../../../utils/formatter';

interface CardNumberProps {
  value: string;
  isError: boolean;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  updateCardInputError: (key: string, value: string | string[]) => void;
  moveFocus: (index: number, value: string, maxLength?: number | undefined) => void;
}

function CardNumber({
  value,
  isError,
  onInputChange,
  updateCardInputError,
  moveFocus,
}: CardNumberProps) {
  const { handleInputTypeChange } = useCardNumber();

  const cardNumber = formatDisplayedCardNumber(value);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleInputTypeChange(event);
    onInputChange(event);
    moveFocus(event.target.tabIndex, event.target.value, event.target.maxLength);
  };

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    updateCardInputError(event.target.name, event.target.dataset.value!);
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

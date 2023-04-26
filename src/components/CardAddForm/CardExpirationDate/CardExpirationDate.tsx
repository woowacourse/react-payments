import { ChangeEvent, FocusEvent, memo } from 'react';
import { ExpirationDate } from '../../../types';
import { EXPIRATION_DATE_INPUT_MAX_LENGTH } from '../../../constants';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';
import { formatDisplayedExpirationDate } from '../../../utils/formatter';

interface CardExpirationDateProps {
  value: ExpirationDate;
  isError: boolean;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  updateCardInputError: (key: string, value: string | string[]) => void;
  moveFocus: (index: number, value: string, maxLength?: number | undefined) => void;
}

function CardExpirationDate({
  value,
  isError,
  onInputChange,
  updateCardInputError,
  moveFocus,
}: CardExpirationDateProps) {
  const expirationDate = formatDisplayedExpirationDate(`${value.month}${value.year}`);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange(event);
    moveFocus(event.target.tabIndex, event.currentTarget.value, event.currentTarget.maxLength);
  };

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    updateCardInputError(event.target.name, event.target.value);
  };

  return (
    <InputContainer
      supportingText={{
        error: '카드에 표시된 유효한 만료일을 (MM/YY) 순서로 입력해주세요',
      }}
      isError={isError}
    >
      <Label htmlFor="expirationDate" required>
        만료일
      </Label>
      <Input
        id="expirationDate"
        name="expirationDate"
        value={expirationDate}
        placeholder="월/년도(MM/YY) 순서로 4자리 숫자를 입력해주세요"
        maxLength={EXPIRATION_DATE_INPUT_MAX_LENGTH}
        autoComplete="cc-exp"
        inputMode="numeric"
        tabIndex={3}
        isError={isError}
        onChange={onChange}
        onBlur={onBlur}
      />
    </InputContainer>
  );
}

export default memo(CardExpirationDate);

import { ChangeEvent, FocusEvent, memo } from 'react';
import { EXPIRATION_DATE_INPUT_MAX_LENGTH } from '../../../constants';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';
import { formatDisplayedExpirationDate, formatExpirationDate } from '../../../utils/formatter';

interface CardExpirationDateProps {
  isError: boolean;
  updateInputValue: (key: string, value: any) => void;
  updateCardInputError: (key: string, value: any) => void;
}

function CardExpirationDate({
  isError,
  updateInputValue,
  updateCardInputError,
}: CardExpirationDateProps) {
  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    target.value = formatDisplayedExpirationDate(target.value);
    updateInputValue(target.name, formatExpirationDate(target.value));
  };

  const onBlur = ({ target }: FocusEvent<HTMLInputElement>) => {
    updateCardInputError(target.name, formatExpirationDate(target.value));
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

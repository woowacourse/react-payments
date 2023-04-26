import { ChangeEvent, FocusEvent, memo } from 'react';
import { CardFormValidation, ExpirationDate } from '../../../types';
import { EXPIRATION_DATE_INPUT_MAX_LENGTH } from '../../../constants';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';
import { useError } from '../../../hooks/common/useError';
import { formatDisplayedExpirationDate } from '../../../utils/formatter';

interface CardExpirationDateProps {
  value: ExpirationDate;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  updateCardInputValidation: (key: keyof CardFormValidation, value: string | string[]) => boolean;
  moveFocus: (index: number, value: string, maxLength?: number | undefined) => void;
}

function CardExpirationDate({
  onInputChange,
  value,
  updateCardInputValidation,
  moveFocus,
}: CardExpirationDateProps) {
  const { isError, handleError, removeError } = useError();

  const expirationDate = formatDisplayedExpirationDate(`${value.month}${value.year}`);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    removeError();
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
        error: '카드에 표시된 유효한 만료일을 (MM/YY) 순서로 동일하게 입력해주세요',
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

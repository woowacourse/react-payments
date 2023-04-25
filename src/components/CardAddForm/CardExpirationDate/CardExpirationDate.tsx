import { ChangeEvent, memo } from 'react';
import { ExpirationDate } from '../../../types';
import { EXPIRATION_DATE_INPUT_MAX_LENGTH } from '../../../constants';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';
import { useError } from '../../../hooks/common/useError';
import { formatDisplayedExpirationDate } from '../../../utils/formatter';

interface CardExpirationDateProps {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: ExpirationDate;
  isValid: boolean;
}

function CardExpirationDate({ onInputChange, value, isValid }: CardExpirationDateProps) {
  const { isError, handleError, removeError } = useError(isValid);

  const expirationDate = formatDisplayedExpirationDate(`${value.month}${value.year}`);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    removeError();
    onInputChange(event);
  };

  return (
    <InputContainer
      supportingText={{
        error: '카드에 표시된 만료일을 (MM/YY) 순서로 동일하게 입력해주세요',
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
        isError={isError}
        onChange={onChange}
        onBlur={handleError}
      />
    </InputContainer>
  );
}

export default memo(CardExpirationDate);

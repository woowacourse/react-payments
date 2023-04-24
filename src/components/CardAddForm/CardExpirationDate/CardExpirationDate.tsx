import { ChangeEvent, useState } from 'react';
import { ExpirationDate } from '../../../types';
import { EXPIRATION_DATE_INPUT_MAX_LENGTH } from '../../../constants';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';
import { formatDisplayedExpirationDate } from '../../../utils/formatter';

interface CardExpirationDateProps {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: ExpirationDate;
  isValid: boolean;
}

function CardExpirationDate({ onInputChange, value, isValid }: CardExpirationDateProps) {
  const [isError, setIsError] = useState(false);

  const expirationDate = formatDisplayedExpirationDate(`${value.month}${value.year}`);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (isError) setIsError(false);

    onInputChange(event);
  };

  const onBlur = () => {
    setIsError(!isValid);
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
        onBlur={onBlur}
      />
    </InputContainer>
  );
}

export default CardExpirationDate;

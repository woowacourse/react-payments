import { ChangeEvent, FocusEvent } from 'react';
import { CardInputValidation, ExpirationDate } from '../../../types';
import { EXPIRATION_DATE_INPUT_MAX_LENGTH } from '../../../constants';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';
import { useError } from '../../../hooks/useError';
import validator from '../../../utils/validator';
import { formatDisplayedExpirationDate } from '../../../utils/formatter';

interface CardExpirationDateProps {
  changeInputValidation: (key: keyof CardInputValidation, value: boolean) => void;
  handleInputChange: (name: string, value: string) => void;
  value: ExpirationDate;
}

function CardExpirationDate({
  changeInputValidation,
  handleInputChange,
  value,
}: CardExpirationDateProps) {
  const [isError, handleError] = useError<CardInputValidation>({
    validator: validator.expirationDate,
    changeInputValidation,
  });

  const expirationDate = formatDisplayedExpirationDate(`${value.month}${value.year}`);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event.target.name, event.target.value);
  };

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    handleError(event.target.name, event.target.value);
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

import { CardInputValidation, ExpirationDateFormat } from '../../../types';
import InputContainer from '../../common/InputContainer/InputContainer';
import Input from '../../common/Input/Input';
import { useError } from '../../../hooks/useError';
import validator from '../../../utils/validator';
import { formatDisplayedExpirationDate } from '../../../utils/formatter';
import { ChangeEvent, FocusEvent } from 'react';

interface CardExpirationDateProps {
  changeInputValidation: (key: keyof CardInputValidation, value: boolean) => void;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: ExpirationDateFormat;
}

function CardExpirationDate({
  changeInputValidation,
  onInputChange,
  value,
}: CardExpirationDateProps) {
  const [isError, handleError] = useError<CardInputValidation>({
    validator: validator.expirationDate,
    changeInputValidation,
  });

  const expirationDate = formatDisplayedExpirationDate(`${value.month}${value.year}`);

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    handleError(event.target.name, event.target.value);
  };

  return (
    <InputContainer
      label="만료일"
      id="expirationDate"
      isError={isError}
      supportingText={
        isError ? '카드에 표시된 만료일을 (MM/YY) 순서로 동일하게 입력해주세요' : undefined
      }
      required
    >
      <Input
        type="text"
        id="expirationDate"
        name="expirationDate"
        value={expirationDate}
        placeholder="연/년도(MM/YY) 순서로 4자리 숫자를 입력해주세요"
        isError={isError}
        maxLength={5}
        autoComplete="cc-csc"
        onChange={onInputChange}
        onBlur={onBlur}
      />
    </InputContainer>
  );
}

export default CardExpirationDate;

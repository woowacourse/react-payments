import { ChangeEvent, FocusEvent } from 'react';
import { CardInputValidation } from '../../../types';
import { CARD_NUMBER_INPUT_MAX_LENGTH } from '../../../constants';
import InputContainer from '../../common/InputContainer/InputContainer';
import Input from '../../common/Input/Input';
import { useError } from '../../../hooks/useError';
import validator from '../../../utils/validator';

interface CardNumberProps {
  changeInputValidation: (key: keyof CardInputValidation, value: boolean) => void;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

function CardNumber({ changeInputValidation, onInputChange, value }: CardNumberProps) {
  const [isError, handleError] = useError<CardInputValidation>({
    validator: validator.cardNumber,
    changeInputValidation,
  });

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    handleError(event.target.name, event.target.value);
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
        id="cardNumber"
        name="cardNumber"
        value={value}
        maxLength={CARD_NUMBER_INPUT_MAX_LENGTH}
        autoComplete="cc-csc"
        isError={isError}
        onChange={onInputChange}
        onBlur={onBlur}
      />
    </InputContainer>
  );
}

export default CardNumber;

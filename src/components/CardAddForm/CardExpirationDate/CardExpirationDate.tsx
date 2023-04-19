import InputContainer from '../../common/InputContainer/InputContainer';
import Input from '../../common/Input/Input';
import { formatExpirationDate } from '../../../utils/formatter';
import { useInputContainer } from '../../../hooks/useInputContainer';
import { CardInputValidation } from '../../../types';

interface CardExpirationDateProps {
  validator: (input: string) => boolean;
  onValidation: (key: keyof CardInputValidation, value: boolean) => void;
}

function CardExpirationDate({ validator, onValidation }: CardExpirationDateProps) {
  const { inputValue, handleInputChange, isError, handleInputBlur } = useInputContainer({
    formatter: formatExpirationDate,
    validator,
    onValidation,
  });

  return (
    <InputContainer
      label="만료일"
      id="expiration-date"
      supportingText="연/년도(MM/YY) 순서로 4자리 숫자"
    >
      <Input
        type="text"
        id="expiration-date"
        value={inputValue}
        isError={isError}
        maxLength={5}
        autoComplete="off"
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
    </InputContainer>
  );
}

export default CardExpirationDate;

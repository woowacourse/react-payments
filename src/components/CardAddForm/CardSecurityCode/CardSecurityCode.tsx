import Input from '../../common/Input/Input';
import InputContainer from '../../common/InputContainer/InputContainer';
import { CardInputValidation } from '../../../types';
import { useInputContainer } from '../../../hooks/useInputContainer';
import { formatNumberInput } from '../../../utils/formatter';

interface CardSecurityCodeProps {
  validator: (input: string) => boolean;
  onValidation: (key: keyof CardInputValidation, value: boolean) => void;
}

function CardSecurityCode({ validator, onValidation }: CardSecurityCodeProps) {
  const { inputValue, handleInputChange, isError, handleInputBlur } = useInputContainer({
    formatter: formatNumberInput,
    validator,
    onValidation,
  });

  return (
    <InputContainer
      label="보안 코드 (CVC/CVV)"
      id="security-code"
      supportingText="카드 뒷면의 CVC 번호 3자리 숫자를 입력해주세요"
    >
      <Input
        type="password"
        id="security-code"
        value={inputValue}
        minLength={3}
        maxLength={4}
        isError={isError}
        autoComplete="off"
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
    </InputContainer>
  );
}

export default CardSecurityCode;

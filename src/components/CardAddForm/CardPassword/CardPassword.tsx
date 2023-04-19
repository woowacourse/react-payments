import styles from './style.module.css';
import InputContainer from '../../common/InputContainer/InputContainer';
import Input from '../../common/Input/Input';
import { CardInputValidation } from '../../../types';
import { useInputContainer } from '../../../hooks/useInputContainer';
import { formatNumberInput } from '../../../utils/formatter';

interface CardPasswordProps {
  validator: (input: string) => boolean;
  onValidation: (key: keyof CardInputValidation, value: boolean) => void;
}

function CardPassword({ validator, onValidation }: CardPasswordProps) {
  const {
    inputValue: inputValue1,
    handleInputChange: handleInputChange1,
    isError: isError1,
    handleInputBlur: handleInputBlur1,
  } = useInputContainer({
    formatter: formatNumberInput,
    validator,
    onValidation,
  });

  const {
    inputValue: inputValue2,
    handleInputChange: handleInputChang2,
    isError: isError2,
    handleInputBlur: handleInputBlur2,
  } = useInputContainer({
    formatter: formatNumberInput,
    validator,
    onValidation,
  });

  return (
    <InputContainer label="비밀 번호" id="password">
      <div className={styles.container}>
        <Input
          type="password"
          id="password"
          value={inputValue1}
          isError={isError1}
          minLength={1}
          maxLength={1}
          autoComplete="off"
          data-id="0"
          onChange={handleInputChange1}
          onBlur={handleInputBlur1}
        />
        <Input
          type="password"
          id="password1"
          value={inputValue2}
          isError={isError2}
          minLength={1}
          maxLength={1}
          autoComplete="off"
          data-id="1"
          onChange={handleInputChang2}
          onBlur={handleInputBlur2}
        />
        <div className={styles.passwordPlaceholder}>
          <div className="passwordItem">•</div>
          <div className="passwordItem">•</div>
        </div>
      </div>
    </InputContainer>
  );
}

export default CardPassword;

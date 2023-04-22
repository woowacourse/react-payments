import styles from './style.module.css';
import { ChangeEvent } from 'react';
import InputContainer from '../../common/InputContainer/InputContainer';
import Input from '../../common/Input/Input';
import { CardInputValidation } from '../../../types';
import { useError } from '../../../hooks/useError';
import validator from '../../../utils/validator';

interface CardPasswordProps {
  handleValidationChange: (key: keyof CardInputValidation, value: boolean) => void;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  values: string[];
}

function CardPassword({ handleValidationChange, onInputChange, values }: CardPasswordProps) {
  const [isError, onErrorBlur] = useError({
    validator: validator.password,
    handleValidationChange,
    inputs: values,
  });

  return (
    <InputContainer
      label="비밀 번호"
      id="password"
      supportingText={isError ? '카드 비밀번호 앞 2자리 숫자를 입력해주세요' : undefined}
      isError={isError}
      required
    >
      <div className={styles.container} onBlur={onErrorBlur}>
        {values.map((password, index) => (
          <Input
            key={index}
            type="password"
            id={index === 0 ? 'password' : `password${index}`}
            value={password}
            maxLength={1}
            isError={isError}
            autoComplete="off"
            data-index={index}
            data-name="password"
            onChange={onInputChange}
          />
        ))}
        <div className={styles.passwordPlaceholder}>
          <div className="passwordItem">•</div>
          <div className="passwordItem">•</div>
        </div>
      </div>
    </InputContainer>
  );
}

export default CardPassword;

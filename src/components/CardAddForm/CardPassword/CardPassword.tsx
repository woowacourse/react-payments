import styles from './style.module.css';
import { ChangeEvent, FocusEvent } from 'react';
import { CardInputValidation } from '../../../types';
import InputContainer from '../../common/InputContainer/InputContainer';
import Input from '../../common/Input/Input';
import { useError } from '../../../hooks/useError';
import { isElementOfType } from '../../../utils/eventUtils';
import validator from '../../../utils/validator';
import { PASSWORD_UNIT_MAX_LENGTH, SECURITY_TEXT_ICON } from '../../../constants';

interface CardPasswordProps {
  changeInputValidation: (key: keyof CardInputValidation, value: boolean) => void;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  values: string[];
}

function CardPassword({ changeInputValidation, onInputChange, values }: CardPasswordProps) {
  const [isError, handleError] = useError<CardInputValidation>({
    validator: validator.password,
    changeInputValidation,
    inputs: values,
  });

  const onBlur = (event: FocusEvent<HTMLElement>) => {
    if (!isElementOfType<HTMLInputElement>(event)) return;

    handleError(event.target.name, event.target.value);
  };

  return (
    <InputContainer
      label="비밀 번호"
      id="password"
      supportingText={isError ? '카드 비밀번호 앞 2자리 숫자를 입력해주세요' : undefined}
      isError={isError}
      required
    >
      <div className={styles.container} onBlur={onBlur}>
        {values.map((password, index) => (
          <Input
            key={index}
            type="password"
            id={index === 0 ? 'password' : `password${index}`}
            name="password"
            value={password}
            data-index={index}
            maxLength={PASSWORD_UNIT_MAX_LENGTH}
            autoComplete="off"
            isError={isError}
            onChange={onInputChange}
          />
        ))}
        <div className={styles.passwordPlaceholder}>
          <p className="passwordItem">{SECURITY_TEXT_ICON}</p>
          <p className="passwordItem">{SECURITY_TEXT_ICON}</p>
        </div>
      </div>
    </InputContainer>
  );
}

export default CardPassword;

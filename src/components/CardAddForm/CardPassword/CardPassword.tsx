import styles from './style.module.css';
import { ChangeEvent, FocusEvent, useRef } from 'react';
import { CardInputValidation } from '../../../types';
import { PASSWORD_UNIT_MAX_LENGTH, SECURITY_TEXT_ICON } from '../../../constants';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';
import { useError } from '../../../hooks/useError';
import { isElementOfType } from '../../../utils/eventUtils';
import validator from '../../../utils/validator';

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
  const lastInputRef = useRef<HTMLInputElement>(null);

  const onBlur = (event: FocusEvent<HTMLElement>) => {
    if (!isElementOfType<HTMLInputElement>(event)) return;

    handleError(event.target.name, event.target.value);
  };

  const onFirstInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange(event);

    if (event.target.value.length === PASSWORD_UNIT_MAX_LENGTH && lastInputRef.current) {
      lastInputRef.current.focus();
    }
  };

  return (
    <InputContainer
      supportingText={{
        error: '카드 비밀번호 앞 2자리 숫자를 입력해주세요',
      }}
      isError={isError}
    >
      <Label htmlFor="password" required>
        비밀번호
      </Label>
      <div className={styles.container} onBlur={onBlur}>
        {values.map((password, index) => (
          <Input
            ref={index === 0 ? undefined : lastInputRef}
            key={index}
            type="password"
            id={index === 0 ? 'password' : `password${index}`}
            name="password"
            value={password}
            data-index={index}
            maxLength={PASSWORD_UNIT_MAX_LENGTH}
            autoComplete="off"
            inputMode="numeric"
            isError={isError}
            onChange={index === 0 ? onFirstInputChange : onInputChange}
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

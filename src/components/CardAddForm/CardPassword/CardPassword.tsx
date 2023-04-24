import styles from './style.module.css';
import { ChangeEvent, FocusEvent, memo, useRef } from 'react';
import { PASSWORD_UNIT_MAX_LENGTH, SECURITY_TEXT_ICON } from '../../../constants';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';
import { useError } from '../../../hooks/useError';

interface CardPasswordProps {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  values: string[];
  isValid: boolean;
}

function CardPassword({ onInputChange, values, isValid }: CardPasswordProps) {
  const lastInputRef = useRef<HTMLInputElement>(null);
  const { isError, handleError, removeError } = useError(isValid);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    removeError();
    onInputChange(event);
  };

  const onBlur = (event: FocusEvent<HTMLElement>) => {
    if (event.currentTarget.contains(event.relatedTarget)) return;

    handleError();
  };

  const onFirstInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);

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
            onChange={index === 0 ? onFirstInputChange : onChange}
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

export default memo(CardPassword);

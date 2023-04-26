import styles from './style.module.css';
import { ChangeEvent, FocusEvent, memo, useRef } from 'react';
import { PASSWORD_UNIT_MAX_LENGTH, SECURITY_TEXT_ICON } from '../../../constants';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';

interface CardPasswordProps {
  values: string[];
  isError: boolean;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  updateCardInputError: (key: string, value: string | string[]) => void;
}

function CardPassword({ values, isError, onInputChange, updateCardInputError }: CardPasswordProps) {
  const lastInputRef = useRef<HTMLInputElement>(null);

  const onFirstInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange(event);

    if (event.target.value.length === PASSWORD_UNIT_MAX_LENGTH && lastInputRef.current) {
      lastInputRef.current.focus();
    }
  };

  const onBlur = (event: FocusEvent<HTMLElement>) => {
    if (event.currentTarget.contains(event.relatedTarget)) return;

    updateCardInputError('password', values);
  };

  return (
    <InputContainer
      supportingText={{
        error: '카드 비밀번호 앞 2자리 숫자를 입력해주세요',
      }}
      isError={isError}
    >
      <Label htmlFor="password" id="password-label" required>
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
            aria-labelledby={index === 0 ? undefined : 'password-label'}
            isError={isError}
            tabIndex={6 + index}
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

export default memo(CardPassword);

import styles from './style.module.css';
import { ChangeEvent, FocusEvent, useRef, useState } from 'react';
import { PASSWORD_UNIT_MAX_LENGTH, SECURITY_TEXT_ICON } from '../../../constants';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';
import { isElementOfType } from '../../../utils/eventUtils';

interface CardPasswordProps {
  handleInputChange: (name: string, value: string, index: number) => void;
  validateInput: (key: string, value: string | string[]) => boolean | undefined;
  values: string[];
}

function CardPassword({ handleInputChange, validateInput, values }: CardPasswordProps) {
  const lastInputRef = useRef<HTMLInputElement>(null);
  const [isError, setIsError] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event.target.name, event.target.value, Number(event.target.dataset.index));
  };

  const onBlur = (event: FocusEvent<HTMLElement>) => {
    if (!isElementOfType<HTMLInputElement>(event)) return;

    const isValid = validateInput(event.target.name, event.target.value);
    setIsError(!isValid);
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

export default CardPassword;

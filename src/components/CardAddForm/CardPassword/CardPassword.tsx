import { memo, useRef } from 'react';
import type { ChangeEvent, FocusEvent } from 'react';
import type { CardFormData, CardFormValidation } from '../../../types';
import Input from '../../common/Input/Input';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import { SECURITY_TEXT_ICON } from '../../../constants';
import { PASSWORD_UNIT_MAX_LENGTH, PATTERN } from '../../../constants/input';
import { formatNumber } from '../../../utils/formatter';
import styles from './style.module.css';

interface CardPasswordProps {
  isError: boolean;
  updateInputValue: <K extends keyof CardFormData>(key: K, value: CardFormData[K]) => void;
  updateInputError: <K extends keyof CardFormValidation>(key: K, value: CardFormData[K]) => void;
}

const CardPassword = ({ isError, updateInputValue, updateInputError }: CardPasswordProps) => {
  const passwordRef = useRef(['', '']);

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    target.value = formatNumber(target.value);

    const newPassword = [...passwordRef.current];
    newPassword[Number(target.dataset.index)] = target.value;

    passwordRef.current = newPassword;
    updateInputValue('password', newPassword);
  };

  const onBlur = (event: FocusEvent<HTMLElement>) => {
    if (event.currentTarget.contains(event.relatedTarget)) return;

    updateInputError('password', passwordRef.current);
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
        <Input
          type="password"
          id="password"
          name="password"
          data-index={0}
          maxLength={PASSWORD_UNIT_MAX_LENGTH}
          autoComplete="off"
          inputMode="numeric"
          pattern={PATTERN.PASSWORD}
          required
          aria-label="첫 번째 비밀번호 입력"
          isError={isError}
          onChange={onChange}
        />
        <Input
          type="password"
          id="password1"
          name="password"
          data-index={1}
          maxLength={PASSWORD_UNIT_MAX_LENGTH}
          autoComplete="off"
          inputMode="numeric"
          pattern={PATTERN.PASSWORD}
          required
          aria-label="두 번째 비밀번호 입력"
          aria-labelledby="password-label"
          isError={isError}
          onChange={onChange}
        />
        <div className={styles.passwordPlaceholder}>
          <p className="passwordItem">{SECURITY_TEXT_ICON}</p>
          <p className="passwordItem">{SECURITY_TEXT_ICON}</p>
        </div>
      </div>
    </InputContainer>
  );
};

export default memo(CardPassword);

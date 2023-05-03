import type { PasswordInputProps } from '../../../type';
import InputContainer from '../../../components/InputContainer';
import { calcMultipleStatus } from '../domain/domain';
import passwordDotImg from '../../../asset/password_dot.png';
import './PasswordInput.css';
import { useMemo } from 'react';

const PasswordInput = ({ cardPassword1, cardPassword2 }: PasswordInputProps) => {
  const status = useMemo(
    () => calcMultipleStatus([cardPassword1.status, cardPassword2.status]),
    [cardPassword1.status, cardPassword2.status]
  );
  return (
    <InputContainer className="card-password-container" status={status} inputType="password">
      <span className="form-label">카드 비밀번호</span>
      <div className="card-password-input-box">
        <input
          className="input-password-container password-single"
          type="password"
          maxLength={1}
          minLength={1}
          value={cardPassword1.value}
          onChange={cardPassword1.onChange}
          required
        />
        <input
          className="input-password-container password-single"
          type="password"
          maxLength={1}
          minLength={1}
          value={cardPassword2.value}
          onChange={cardPassword2.onChange}
          required
        />
        <img src={passwordDotImg} alt="비밀번호" />
        <img src={passwordDotImg} alt="비밀번호" />
      </div>
    </InputContainer>
  );
};

export default PasswordInput;

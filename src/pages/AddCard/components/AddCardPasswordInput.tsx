import type { AddCardPasswordInputProps } from '../../../type';
import passwordDotImg from '../../../asset/password_dot.png';
import './AddCardPasswordInput.css';

const AddCardPasswordInput = ({ cardPassword1, cardPassword2 }: AddCardPasswordInputProps) => {
  return (
    <section className="card-password-container">
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
    </section>
  );
};

export default AddCardPasswordInput;

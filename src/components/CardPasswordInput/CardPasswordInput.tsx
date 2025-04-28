import InputContainer from '../InputContainer/InputContainer';
import { useCardFormContext } from '../../context/CardFormContext';

const CardPasswordInput = () => {
  const { password, updatePassword, passwordError, passwordErrorMessage } =
    useCardFormContext();

  return (
    <InputContainer
      title="비밀번호를 입력해 주세요"
      subTitle="앞의 2자리를 입력해주세요"
    >
      <h4 className="label">비밀번호 앞 2자리</h4>
      <div className="inputContainer">
        <input
          type="password"
          value={password}
          onChange={updatePassword}
          name="password"
          maxLength={2}
          placeholder="비밀번호 앞 2자리"
          className={`input ${passwordError ? 'errorInput' : ''}`}
        />
      </div>
      <p className="helperText" data-testid="helper-text">
        {passwordErrorMessage}
      </p>
    </InputContainer>
  );
};

export default CardPasswordInput;

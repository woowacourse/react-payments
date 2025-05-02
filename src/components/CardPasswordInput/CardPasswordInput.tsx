import InputContainer from '../InputContainer/InputContainer';
import usePassword from '../../hooks/usePassword';

const CardPasswordInput = () => {
  const { password, error, validate } = usePassword();

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
          onChange={(e) => validate(e.target.value)}
          name="password"
          maxLength={2}
          placeholder="비밀번호 앞 2자리"
          className={`input ${error.isValid ? 'errorInput' : ''}`}
        />
      </div>
      <p className="helperText" data-testid="helper-text">
        {error.errorMessage}
      </p>
    </InputContainer>
  );
};

export default CardPasswordInput;

import InputContainer from '../InputContainer/InputContainer';
import { useCardPasswordValidation } from '../../hooks/useCardPasswordValidation';
import { useConfirmButton } from '../../hooks/confirmButtonContext';

type CardPasswordInputProps = {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
};

const CardPasswordInput = ({
  password,
  setPassword,
}: CardPasswordInputProps) => {
  const [isError, errorMessage, validate] = useCardPasswordValidation();
  const { checkInputsComplete } = useConfirmButton();

  const updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
    validate(value);
    const isValid = value.length === 2;
    checkInputsComplete('password', isValid);
  };

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
          className={`input ${isError ? 'errorInput' : ''}`}
        />
      </div>
      <p className="helperText" data-testid="helper-text">
        {errorMessage}
      </p>
    </InputContainer>
  );
};

export default CardPasswordInput;

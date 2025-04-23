import { useRef, useState } from 'react';
import { validateCardPassword } from '../../domain/validate';
import InputContainer from '../InputContainer/InputContainer';

type CardPasswordInputProps = {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
};

const CardPasswordInput = ({
  password,
  setPassword,
}: CardPasswordInputProps) => {
  const [helperText, setHelperText] = useState('');
  const inputRef = useRef<HTMLElement | null>(null);

  const updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const { value } = e.target;
      setPassword(value);
      if (value.length === 0) {
        setHelperText('');
        return;
      }
      validateCardPassword(value, 2);
      console.log('setHelperText');
      setHelperText('');
    } catch (error) {
      if (error instanceof Error) {
        setHelperText(error.message);
        inputRef.current?.focus();
      }
    }
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
          ref={(element) => {
            inputRef.current = element;
          }}
          placeholder="비밀번호 앞 2자리"
          className="input"
        />
      </div>
      <p className="helperText" data-testid="helper-text">
        {helperText}
      </p>
    </InputContainer>
  );
};

export default CardPasswordInput;

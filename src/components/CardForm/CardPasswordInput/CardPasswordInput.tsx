import { useState } from 'react';

import TitleContainer from '../../common/TitleContainer/TitleContainer';
import InputField from '../../common/InputField/InputField';
import Input from '../../common/Input/Input';

import { isNumber } from '../../../utils/validation';
import useInput from '../../../hooks/useInput';

interface CardPasswordInputProps {
  password: string;
  isValid: boolean;
  handlePassword: (password: string) => void;
}

const CardPasswordInput = ({ password, isValid, handlePassword }: CardPasswordInputProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const { value: passwordInput, onChange: onPasswordInputChange } = useInput(password);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNumber(e.target.value)) {
      e.target.value = '';
      return;
    }

    if (!isClicked) setIsClicked(true);

    onPasswordInputChange(e);
    handlePassword(e.target.value);
  };

  const errorMessage = isValid ? '' : '두 자리 숫자여야 합니다.';

  return (
    <div>
      <TitleContainer title="비밀번호를 입력해 주세요" subTitle="앞의 2자리를 입력해 주세요." />
      <InputField label="비밀번호 앞 2자리" inputCount={1} errorMessage={isClicked ? errorMessage : ''}>
        <Input
          isValid={isClicked ? isValid : true}
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={passwordInput}
          maxLength={2}
          onChange={handlePasswordChange}
          autoFocus
        />
      </InputField>
    </div>
  );
};

export default CardPasswordInput;

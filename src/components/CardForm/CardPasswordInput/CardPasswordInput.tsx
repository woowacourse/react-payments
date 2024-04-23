import { useState } from 'react';

import TitleContainer from '../../common/TitleContainer/TitleContainer';
import InputField from '../../common/InputField/InputField';
import Input from '../../common/Input/Input';

import { isNumber, isValidLength } from '../../../utils/validation';

interface CardPasswordInputProps {
  handlePassword: (password: string) => void;
}

const CardPasswordInput = ({ handlePassword }: CardPasswordInputProps) => {
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNumber(e.target.value)) {
      e.target.value = '';
      return;
    }

    if (isValidLength(e.target.value, 2)) {
      setIsValid(true);
      setErrorMessage('');
    }

    handlePassword(e.target.value);
  };

  const handlePasswordBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIsValid = isNumber(e.target.value) && isValidLength(e.target.value, 2);

    setIsValid(newIsValid);
    setErrorMessage(newIsValid ? '' : '두 자리 숫자여야 합니다.');

    handlePassword(newIsValid ? e.target.value : '');
  };

  return (
    <div>
      <TitleContainer title="비밀번호를 입력해 주세요" subTitle="앞의 2자리를 입력해 주세요." />
      <InputField label="비밀번호 앞 2자리" inputCount={1} errorMessage={errorMessage}>
        <Input
          isValid={isValid}
          type="password"
          placeholder="비밀번호를 입력하세요"
          maxLength={2}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
        />
      </InputField>
    </div>
  );
};

export default CardPasswordInput;

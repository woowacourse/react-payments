import { ChangeEvent, useState } from 'react';

import { Password, SetPassword } from '../../types/state';
import { PASSWORD } from '../../constants/cardInfo';
import { ERROR_MESSAGE } from '../../constants/message';

import { isNumeric } from '../../validator';

import * as styled from './PasswordInputBox.styled';
import Input from '../Input/Input';

interface PasswordInputBoxProps {
  password: Password;
  setPassword: SetPassword;
  securityCode: string;
}

const PasswordInputBox = ({ password, setPassword, securityCode }: PasswordInputBoxProps) => {
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isNumeric(value) && value.length) {
      setErrorMessage(ERROR_MESSAGE.SHOULD_NUMBER);

      return;
    }

    if (errorMessage) setErrorMessage('');

    if (value.length > PASSWORD.MAX_LENGTH) return;

    setPassword({
      ...password,
      [name]: value,
    });
  };

  return (
    <styled.PasswordInputBox>
      <label>
        <styled.LabelHeader>
          <span>카드 비밀번호</span>
        </styled.LabelHeader>
        <styled.InputContainer>
          {Object.entries(password).map(([key, value]) => {
            return (
              <Input
                key={key}
                name={key}
                value={value}
                onChange={onChange}
                width="xs"
                type="password"
                maxLength={1}
                isFocus={key === 'first' && securityCode.length === 3}
              />
            );
          })}
        </styled.InputContainer>
      </label>
      <styled.ErrorMessage>{errorMessage}</styled.ErrorMessage>
    </styled.PasswordInputBox>
  );
};

export default PasswordInputBox;

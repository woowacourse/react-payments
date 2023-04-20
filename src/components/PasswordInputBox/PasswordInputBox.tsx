import { ChangeEvent, useState } from 'react';
import Input from '../Input/Input';
import * as styled from './PasswordInputBox.styled';
import { isNumeric } from '../../validator';

export interface PasswordsState {
  first: string;
  second: string;
  [key: string]: string;
}

const PasswordInputBox = () => {
  const [passwords, setPasswords] = useState<PasswordsState>({
    first: '',
    second: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isNumeric(value)) {
      return setErrorMessage('숫자만 입력하세요');
    }

    if (errorMessage) setErrorMessage('');

    if (value.length > 1) return;

    setPasswords({
      ...passwords,
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
          {Object.keys(passwords).map((key) => {
            return (
              <Input
                key={key}
                name={key}
                value={passwords[key]}
                onChange={onChange}
                width="xs"
                type="text"
                maxLength={1}
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

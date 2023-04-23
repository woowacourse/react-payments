import { ChangeEvent, useState } from 'react';
import Input from '../Input/Input';
import * as styled from './PasswordInputBox.styled';
import { isNumeric } from '../../validator';
import { CardInfo, Password } from '../../App';

const PasswordInputBox = ({ password, setCardInfo }: { password: Password; setCardInfo: CallableFunction }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isNumeric(value)) {
      return setErrorMessage('숫자만 입력하세요');
    }

    if (errorMessage) setErrorMessage('');

    if (value.length > 1) return;

    setCardInfo((prev: CardInfo) => {
      return {
        ...prev,
        password: {
          ...password,
          [name]: value,
        },
      };
    });
  };

  return (
    <styled.PasswordInputBox>
      <label>
        <styled.LabelHeader>
          <span>카드 비밀번호</span>
        </styled.LabelHeader>
        <styled.InputContainer>
          {Object.keys(password).map(key => {
            return (
              <Input
                key={key}
                name={key}
                value={password[key]}
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

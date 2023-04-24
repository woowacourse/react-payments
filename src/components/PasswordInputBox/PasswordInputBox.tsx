import { ChangeEvent, useState } from 'react';

import { CardInfo, Password, SetCardInfo } from '../../types/state';
import { PASSWORD } from '../../constants/cardInfo';
import { ERROR_MESSAGE } from '../../constants/message';

import { isNumeric } from '../../validator';

import * as styled from './PasswordInputBox.styled';
import Input from '../Input/Input';

const PasswordInputBox = ({ password, setCardInfo }: { password: Password; setCardInfo: SetCardInfo }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isNumeric(value) && value.length) {
      setErrorMessage(ERROR_MESSAGE.SHOULD_NUMBER);

      return;
    }

    if (errorMessage) setErrorMessage('');

    if (value.length > PASSWORD.MAX_LENGTH) return;

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
          {Object.entries(password).map(([key, value]) => {
            return (
              <Input key={key} name={key} value={value} onChange={onChange} width="xs" type="password" maxLength={1} />
            );
          })}
        </styled.InputContainer>
      </label>
      <styled.ErrorMessage>{errorMessage}</styled.ErrorMessage>
    </styled.PasswordInputBox>
  );
};

export default PasswordInputBox;

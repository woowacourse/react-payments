import { ChangeEvent, useState } from 'react';

import { Input } from '../../';

import * as styled from './CardPasswordInput.styled';
import { isNumeric } from '../../../domain/validator';
import { CardInfo } from '../../../App';
import LabelHeader from '../LabelHeader';

interface PasswordInputBoxProps {
  refs: any;
  password: any;
  setCardInfo: CallableFunction;
}

const PasswordInputBox = ({ refs, password, setCardInfo }: PasswordInputBoxProps) => {
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
        <LabelHeader title="카드 비밀번호" required={true} />
        <styled.InputContainer>
          {Object.keys(password).map((key, index) => (
            <Input
              key={key}
              name={key}
              ref={refs[index]}
              value={password[key]}
              onChange={onChange}
              type="password"
              width="xs"
              center={true}
              maxLength={1}
            />
          ))}
          <styled.HiddenPassword>
            <div />
          </styled.HiddenPassword>
          <styled.HiddenPassword>
            <div />
          </styled.HiddenPassword>
        </styled.InputContainer>
      </label>
      <styled.ErrorMessage>{errorMessage}</styled.ErrorMessage>
    </styled.PasswordInputBox>
  );
};

export default PasswordInputBox;

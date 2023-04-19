import { ChangeEvent, useState } from 'react';
import Input from '../Input/Input';
import * as styled from './SecurityCodeInputBox.styled';
import { isNumeric } from '../../validator';

const SecurityCodeInputBox = () => {
  const [securityCode, setSecurityCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isNumeric(value)) {
      return setErrorMessage('숫자만 입력하세요');
    }

    if (errorMessage) setErrorMessage('');

    if (value.length > 3) return;

    setSecurityCode(value);
  };

  return (
    <styled.SecurityCodeInputBox>
      <label>
        <span>보안 코드(CVC/CVV)</span>
        <div>
          <Input
            value={securityCode}
            onChange={onChange}
            width="middle"
            type="text"
            maxLength={3}
          />
        </div>
      </label>
      <styled.ErrorMessage>{errorMessage}</styled.ErrorMessage>
    </styled.SecurityCodeInputBox>
  );
};

export default SecurityCodeInputBox;

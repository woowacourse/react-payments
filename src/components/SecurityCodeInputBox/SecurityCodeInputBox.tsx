import { ChangeEvent, useState } from 'react';

import { OwnerName, SetSecurityCode } from '../../types/state';
import { SECURITY_CODE } from '../../constants/cardInfo';
import { ERROR_MESSAGE } from '../../constants/message';

import { isNumeric } from '../validators/validator';

import * as styled from './SecurityCodeInputBox.styled';
import Input from '../Input/Input';

interface SecurityCodeInputBoxProps {
  securityCode: string;
  setSecurityCode: SetSecurityCode;
  ownerName: OwnerName;
}

const SecurityCodeInputBox = ({ securityCode, setSecurityCode, ownerName }: SecurityCodeInputBoxProps) => {
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isNumeric(value) && value.length) {
      setErrorMessage(ERROR_MESSAGE.SHOULD_NUMBER);

      return;
    }

    if (errorMessage) setErrorMessage('');

    if (value.length > SECURITY_CODE.MAX_LENGTH) return;

    setSecurityCode(value);
  };

  return (
    <styled.SecurityCodeInputBox>
      <label>
        <styled.LabelHeader>
          <span>보안 코드(CVC/CVV)</span>
        </styled.LabelHeader>
        <styled.InputContainer>
          <Input
            value={securityCode}
            onChange={onChange}
            width="m"
            type="password"
            maxLength={3}
            isFocus={ownerName?.length === 30}
          />
        </styled.InputContainer>
      </label>
      <styled.ErrorMessage>{errorMessage}</styled.ErrorMessage>
    </styled.SecurityCodeInputBox>
  );
};

export default SecurityCodeInputBox;

import { ChangeEvent, useState } from 'react';

import { Input } from '../../';

import * as styled from './CardSecurityCodeInput.styled';
import { isNumeric } from '../../../domain/validator';
import { CardInfo } from '../../../App';
import LabelHeader from '../LabelHeader';

interface SecurityCodeInputBoxProps {
  refs: any;
  setCardInfo: CallableFunction;
  securityCode: any;
}

const SecurityCodeInputBox = ({ refs, setCardInfo, securityCode }: SecurityCodeInputBoxProps) => {
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isNumeric(value)) {
      return setErrorMessage('숫자만 입력하세요');
    }

    if (errorMessage) setErrorMessage('');

    if (value.length > 3) return;

    setCardInfo((prev: CardInfo) => {
      return {
        ...prev,
        securityCode: value,
      };
    });
  };

  return (
    <styled.SecurityCodeInputBox>
      <label>
        <LabelHeader title="보안 코드(CVC/CVV)" required={true} />
        <styled.InputContainer>
          <Input
            value={securityCode}
            ref={refs[0]}
            onChange={onChange}
            type="password"
            width="m"
            center={true}
            maxLength={3}
          />
        </styled.InputContainer>
      </label>
      <styled.ErrorMessage>{errorMessage}</styled.ErrorMessage>
    </styled.SecurityCodeInputBox>
  );
};

export default SecurityCodeInputBox;

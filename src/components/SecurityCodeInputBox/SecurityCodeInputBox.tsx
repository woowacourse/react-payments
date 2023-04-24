import { ChangeEvent, useState } from 'react';
import Input from '../Input/Input';
import * as styled from './SecurityCodeInputBox.styled';
import { isNumeric } from '../../validator';
import { CardInfo } from '../../types/state';
import { SECURITY_CODE } from '../../constants/cardInfo';
import { ERROR_MESSAGE } from '../../constants/message';

const SecurityCodeInputBox = ({
  securityCode,
  setCardInfo,
}: {
  securityCode: string;
  setCardInfo: CallableFunction;
}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isNumeric(value) && value.length) {
      setErrorMessage(ERROR_MESSAGE.SHOULD_NUMBER);

      return;
    }

    if (errorMessage) setErrorMessage('');

    if (value.length > SECURITY_CODE.MAX_LENGTH) return;

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
        <styled.LabelHeader>
          <span>보안 코드(CVC/CVV)</span>
        </styled.LabelHeader>
        <styled.InputContainer>
          <Input value={securityCode} onChange={onChange} width="m" type="text" maxLength={3} />
        </styled.InputContainer>
      </label>
      <styled.ErrorMessage>{errorMessage}</styled.ErrorMessage>
    </styled.SecurityCodeInputBox>
  );
};

export default SecurityCodeInputBox;

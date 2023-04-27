import { useContext } from 'react';

import CardInfoContext from '../../contexts/CardInfoContext';

import { PASSWORD } from '../../constants/cardInfo';
import { ERROR_MESSAGE } from '../../constants/message';
import { isNumeric } from '../validators/validator';
import { useInputValidator } from '../../hooks/useInputValidator';
import { useInputBox } from '../../hooks/useInputBox';

import * as styled from './PasswordInputBox.styled';
import Input from '../Input/Input';

const PasswordInputBox = () => {
  const { password, setPassword, securityCode } = useContext(CardInfoContext);
  const { validate, errorMessageState } = useInputValidator(
    isNumeric,
    ERROR_MESSAGE.SHOULD_NUMBER,
    PASSWORD.MAX_LENGTH
  );

  const { onChange } = useInputBox(validate, password, setPassword);

  return (
    <styled.PasswordInputBox>
      <label>
        <styled.LabelHeader>
          <span>카드 비밀번호</span>
        </styled.LabelHeader>
        <styled.InputContainer>
          {Object.entries(password).map(([key, value]) => {
            const isFirstInput = key === 'firstPassword';
            const isSecurityCodeFull = securityCode.length === 3;

            return (
              <Input
                key={key}
                name={key}
                value={value}
                onChange={onChange}
                width="xs"
                type="password"
                maxLength={1}
                isFocus={isFirstInput && isSecurityCodeFull}
              />
            );
          })}
          <styled.RestPasswordContainer>
            <styled.RestPassword />
          </styled.RestPasswordContainer>
          <styled.RestPasswordContainer>
            <styled.RestPassword />
          </styled.RestPasswordContainer>
        </styled.InputContainer>
      </label>
      <styled.ErrorMessage>{errorMessageState}</styled.ErrorMessage>
    </styled.PasswordInputBox>
  );
};

export default PasswordInputBox;

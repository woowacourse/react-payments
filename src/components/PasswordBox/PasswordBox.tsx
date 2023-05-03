import { ChangeEvent, useContext } from 'react';

import CardContext from '../../contexts/CardContext';

import { PASSWORD } from '../../constants/card';
import { ERROR_MESSAGE } from '../../constants/message';
import { isNumeric } from '../validators/validator';
import { useInputValidator } from '../../hooks/useInputValidator';

import * as styled from './PasswordBox.styled';
import * as commonStyled from '../Common/Common.styled';
import Input from '../Input/Input';

const PasswordBox = () => {
  const { password, setPassword, securityCode } = useContext(CardContext);
  const { validate, errorMessageState } = useInputValidator(
    isNumeric,
    ERROR_MESSAGE.SHOULD_NUMBER,
    PASSWORD.MAX_LENGTH
  );

  const handleChangeInput = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (!validate(value)) {
      return;
    }

    setPassword({
      ...password,
      [name]: value,
    });
  };

  return (
    <styled.PasswordBox>
      <label>
        <commonStyled.LabelTextParagraph>
          카드 비밀번호
        </commonStyled.LabelTextParagraph>
        <styled.InputBox>
          {Object.entries(password).map(([key, value]) => {
            const isFirstInput = key === 'firstPassword';
            const isSecurityCodeFull = securityCode.length === 3;

            return (
              <Input
                key={key}
                name={key}
                value={value}
                onChange={handleChangeInput}
                width="xs"
                type="password"
                maxLength={1}
                isFocus={isFirstInput && isSecurityCodeFull}
              />
            );
          })}
          <styled.RestPasswordContainer>
            <styled.EllipseBox />
          </styled.RestPasswordContainer>
          <styled.RestPasswordContainer>
            <styled.EllipseBox />
          </styled.RestPasswordContainer>
        </styled.InputBox>
      </label>
      <commonStyled.ErrorMessageParagraph>
        {errorMessageState}
      </commonStyled.ErrorMessageParagraph>
    </styled.PasswordBox>
  );
};

export default PasswordBox;

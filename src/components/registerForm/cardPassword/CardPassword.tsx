import React, { useState, useRef, useContext } from 'react';

import styled, { css } from 'styled-components';

import useAutoFocus from '../../../hooks/useAutoFocus';
import { ONLY_NUMBER_REGEXP } from '../../../utils/regexp';
import FormLabel from '../../@common/FormLabel';
import Input from '../../@common/Input';
import ErrorSpan from '../../@common/ErrorSpan';
import CreditCardContext from '../../../contexts/InputValueContext';

function CardPassword() {
  const [passwordError, setPasswordError] = useState(false);
  const [creditCardInfo, setCreditCardInfo] = useContext(CreditCardContext);

  const refs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  const { focusNext } = useAutoFocus({
    refs: refs,
    maxLength: 1,
  });

  const passwordChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const enteredValue = event.currentTarget.value as string;
    const inputIndex = Number(event.currentTarget.dataset['idx']);

    // 숫자 외 입력 방지
    if (!ONLY_NUMBER_REGEXP.test(enteredValue)) return;

    try {
      // 1. 길이 불통과 -> 에러
      if (enteredValue.length !== 1) {
        throw new Error();
      }

      // 2. 길이 통과 -> password 갱신
      setPasswordError(false);
    } catch {
      // 3. 다시 에러 설정
      setPasswordError(true);
    } finally {
      if (!setCreditCardInfo) return;

      const newValue = creditCardInfo.password;
      newValue[inputIndex] = enteredValue;

      setCreditCardInfo('password', newValue);

      // focus 조정
      focusNext(Number(inputIndex));
    }
  };

  return (
    <CardPasswordContainer>
      <FormLabel>{'카드 비밀번호'}</FormLabel>
      <PasswordInputContainer>
        <Input
          data-order="first"
          data-idx="0"
          value={creditCardInfo.password[0]}
          onChange={passwordChange}
          maxLength={1}
          inputmode="numeric"
          type="password"
          customInputStyle={PasswordInput}
          ref={refs[0]}
        />
        <Input
          data-order="second"
          data-idx="1"
          value={creditCardInfo.password[1]}
          onChange={passwordChange}
          maxLength={1}
          inputmode="numeric"
          type="password"
          customInputStyle={PasswordInput}
          ref={refs[1]}
        />
        <DotParagraph>•</DotParagraph>
        <DotParagraph>•</DotParagraph>
      </PasswordInputContainer>
      {passwordError && <ErrorSpan>비밀번호 앞 2자리를 입력해주세요.</ErrorSpan>}
    </CardPasswordContainer>
  );
}

export default CardPassword;

const CardPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const PasswordInputContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 7px;
`;

const PasswordInput = css`
  width: 43px;

  text-align: center;
  font-size: 28px;
`;

const DotParagraph = styled.p`
  width: 43px;
  height: 45px;

  margin: 0;

  font-size: 28px;
  text-align: center;
`;

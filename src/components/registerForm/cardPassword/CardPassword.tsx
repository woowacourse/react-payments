import React, { useState, useContext, useRef } from 'react';

import styled, { css } from 'styled-components';
import { InputValuesContext } from '../InputValueContext';
import useAutoFocus from '../../../hooks/useAutoFocus';
import { ONLY_NUMBER_REGEXP } from '../../../utils/regexp';
import FormLabel from '../../@common/FormLabel';
import Input from '../../@common/Input';
import ErrorSpan from '../../@common/ErrorSpan';

interface CardPasswordObj {
  first: string;
  second: string;
}

function CardPassword() {
  const [cardInput, setCardInput] = useContext(InputValuesContext);

  const [passwordError, setPasswordError] = useState(false);

  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);

  const nextInputFocus = useAutoFocus({
    refs: [firstInputRef, secondInputRef],
    maxLength: 1,
  });

  const passwordChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget.value as string;
    const name = event.currentTarget.dataset['order'] as keyof CardPasswordObj;
    const idx = event.currentTarget.dataset['idx'] as string;

    if (!ONLY_NUMBER_REGEXP.test(value)) return;

    try {
      if (value.length !== 1) {
        throw new Error();
      }
      setPasswordError(false);
    } catch {
      setPasswordError(true);
    } finally {
      if (!setCardInput) return;
      setCardInput((prev) => ({
        ...prev,
        password: {
          ...prev.password,
          [name]: value,
        },
      }));
    }

    nextInputFocus(Number(idx));
  };

  return (
    <CardPasswordContainer>
      <FormLabel>{'카드 비밀번호'}</FormLabel>
      <PasswordInputContainer>
        <Input
          data-order="first"
          data-idx="0"
          value={cardInput.password['first']}
          onChange={passwordChange}
          maxLength={1}
          inputmode="numeric"
          type="password"
          customInputStyle={PasswordInput}
          ref={firstInputRef}
        />
        <Input
          data-order="second"
          data-idx="1"
          value={cardInput.password['second']}
          onChange={passwordChange}
          maxLength={1}
          inputmode="numeric"
          type="password"
          customInputStyle={PasswordInput}
          ref={secondInputRef}
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

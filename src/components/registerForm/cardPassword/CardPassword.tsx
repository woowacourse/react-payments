import React, { useState, useRef, useContext } from 'react';

import styled, { css } from 'styled-components';

import useAutoFocus from '../../../hooks/useAutoFocus';
import { ONLY_NUMBER_REGEXP } from '../../../utils/regexp';
import FormLabel from '../../@common/FormLabel';
import Input from '../../@common/Input';
import ErrorSpan from '../../@common/ErrorSpan';
import { CreditCardContext } from '../../../contexts/CreditCardContext';

function CardPassword() {
  const [validationStatus, setValidationStatus] = useState({
    isValid: true,
    message: '',
  });
  const [creditCardInfo, setCreditCardInfo] = useContext(CreditCardContext);

  const refs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  const { focusNext } = useAutoFocus({
    refs: refs,
    maxLength: 1,
  });

  const _onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const enteredPassword = event.currentTarget.value as string;
    const inputIndex = Number(event.currentTarget.dataset['idx']);

    if (!ONLY_NUMBER_REGEXP.test(enteredPassword)) {
      setValidationStatus({
        isValid: false,
        message: '숫자만 입력 가능합니다.',
      });

      return;
    }

    if (!setCreditCardInfo) return;

    setValidationStatus({
      isValid: true,
      message: '',
    });

    const newValue = [...creditCardInfo.password];
    newValue[inputIndex] = enteredPassword;

    setCreditCardInfo('password', newValue);
    focusNext(Number(inputIndex));
  };

  const _onBlur: React.FocusEventHandler<HTMLInputElement> = () => {
    refs.forEach(({ current }) => {
      if (current?.value.length === 0) {
        setValidationStatus({
          isValid: false,
          message: '카드 비밀번호 2자리를 입력해주세요.',
        });
      }
    });
  };

  return (
    <CardPasswordContainer>
      <FormLabel>{'카드 비밀번호'}</FormLabel>
      <PasswordInputContainer>
        <Input
          data-order="first"
          data-idx="0"
          value={creditCardInfo.password[0]}
          onChange={_onChange}
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
          onChange={_onChange}
          onBlur={_onBlur}
          maxLength={1}
          inputmode="numeric"
          type="password"
          customInputStyle={PasswordInput}
          ref={refs[1]}
        />
        <DotParagraph>•</DotParagraph>
        <DotParagraph>•</DotParagraph>
      </PasswordInputContainer>
      {!validationStatus.isValid && <ErrorSpan>{validationStatus.message}</ErrorSpan>}
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

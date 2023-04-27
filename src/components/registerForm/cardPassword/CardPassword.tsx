import React, { useState, useRef, useContext } from 'react';

import useAutoFocus from '../../../hooks/useAutoFocus';
import { ONLY_NUMBER_REGEXP } from '../../../utils/regexp';
import FormLabel from '../../@common/FormLabel';
import Input from '../../@common/Input';
import ErrorSpan from '../../@common/ErrorSpan';
import { CreditCardContext } from '../../../contexts/CreditCardContext';
import InputWrapper from '../../@common/InputWrapper';
import { DotParagraph, PasswordInputContainer } from './CardPassword.style';

function CardPassword() {
  const [validationStatus, setValidationStatus] = useState({
    isValid: true,
    message: '',
  });
  const { creditCard, setCreditCard } = useContext(CreditCardContext);

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

    if (!setCreditCard) return;

    setValidationStatus({
      isValid: true,
      message: '',
    });

    const newValue = [...creditCard.password];
    newValue[inputIndex] = enteredPassword;

    setCreditCard('password', newValue);
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
    <InputWrapper>
      <FormLabel>{'카드 비밀번호'}</FormLabel>
      <PasswordInputContainer>
        <Input
          data-idx="0"
          value={creditCard.password[0]}
          onChange={_onChange}
          onBlur={_onBlur}
          maxLength={1}
          inputMode="numeric"
          type="password"
          width="43px"
          ref={refs[0]}
        />
        <Input
          data-idx="1"
          value={creditCard.password[1]}
          onChange={_onChange}
          onBlur={_onBlur}
          maxLength={1}
          inputMode="numeric"
          type="password"
          width="43px"
          ref={refs[1]}
        />
        <DotParagraph>•</DotParagraph>
        <DotParagraph>•</DotParagraph>
      </PasswordInputContainer>
      {!validationStatus.isValid && <ErrorSpan>{validationStatus.message}</ErrorSpan>}
    </InputWrapper>
  );
}

export default CardPassword;

import React, { useState, useContext, useRef } from 'react';

import useAutoFocus from '../../../hooks/useAutoFocus';
import { ONLY_NUMBER_REGEXP } from '../../../utils/regexp';
import FormLabel from '../../common/FormLabel';
import Input from '../../common/input/Input';
import ErrorSpan from '../../common/ErrorSpan';
import { CreditCardContext } from '../../../contexts/CreditCardContext';
import InputWrapper from '../../common/InputWrapper';
import { DotParagraph, PasswordInputContainer } from './CardPassword.style';
import CreditCardContextType from '../../../@types/creditCardContextType';

function CardPassword() {
  const [validationStatus, setValidationStatus] = useState({
    isValid: true,
    message: '',
  });
  const { creditCard, setCreditCard } = useContext(CreditCardContext) as CreditCardContextType;

  const inputListRef = useRef<HTMLInputElement[]>([]);
  const { focusNext } = useAutoFocus(inputListRef, 1);

  const handleChangeByIndex: (index: number) => React.ChangeEventHandler<HTMLInputElement> =
    (index) => (event) => {
      const enteredPassword = event.currentTarget.value;

      if (!ONLY_NUMBER_REGEXP.test(enteredPassword)) {
        setValidationStatus({
          isValid: false,
          message: '숫자만 입력 가능합니다.',
        });

        return;
      }

      if (!setCreditCard) return;

      const newValue = [...creditCard.password];
      newValue[index] = enteredPassword;

      focusNext(index);
      setValidationStatus({
        isValid: true,
        message: '',
      });
      setCreditCard('password', newValue);
    };

  const handleBlur: React.FocusEventHandler<HTMLInputElement> = () => {
    creditCard.password.forEach((numberInput) => {
      if (numberInput.length === 0) {
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
        {Array.from({ length: 2 }, (_, index) => (
          <Input
            data-testid={`password-${index}`}
            key={`card-password-${index}`}
            value={creditCard.password[index]}
            onChange={handleChangeByIndex(index)}
            onBlur={handleBlur}
            maxLength={1}
            inputMode="numeric"
            type="password"
            width="43px"
            ref={(el: HTMLInputElement) => {
              inputListRef.current[index] = el;
            }}
          />
        ))}
        <DotParagraph>•</DotParagraph>
        <DotParagraph>•</DotParagraph>
      </PasswordInputContainer>
      {!validationStatus.isValid && <ErrorSpan>{validationStatus.message}</ErrorSpan>}
    </InputWrapper>
  );
}

export default CardPassword;

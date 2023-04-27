import React, { useState, useContext, useRef } from 'react';

import useAutoFocus from '../../../hooks/useAutoFocus';
import FormLabel from '../../@common/FormLabel';
import Input from '../../@common/Input';
import ErrorSpan from '../../@common/ErrorSpan';
import { CreditCardContext } from '../../../contexts/CreditCardContext';
import InputWrapper from '../../@common/InputWrapper';
import CardNumberInputContainer from './CardNumber.style';
import CreditCardContextType from '../../../@types/creditCardContextType';

export const CardNumber = () => {
  const { creditCard, setCreditCard } = useContext(CreditCardContext) as CreditCardContextType;

  const [validStatus, setValidStatus] = useState({
    isValid: false,
    message: '',
  });

  const refs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const { focusNext } = useAutoFocus({
    refs: refs,
    maxLength: 4,
  });

  const generateChangeHandler: (index: number) => React.ChangeEventHandler<HTMLInputElement> =
    (index) => (event) => {
      const enteredNumber = event.currentTarget.value as string;

      if (isNaN(Number(enteredNumber))) {
        setValidStatus({
          isValid: false,
          message: '숫자만 입력 가능합니다.',
        });

        return;
      }

      const newCardNumber = [...creditCard.cardNumber];
      newCardNumber[index] = enteredNumber;

      if (!setCreditCard) return;

      setCreditCard('cardNumber', newCardNumber);
      setValidStatus({
        isValid: true,
        message: '',
      });
      focusNext(index);
    };

  const _onBlur: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const enteredNumber = event.currentTarget.value as string;

    if (enteredNumber.length !== 4) {
      return setValidStatus({
        isValid: false,
        message: '4글자를 모두 입력해주세요.',
      });
    }
  };

  const _onBlurLast: React.FocusEventHandler<HTMLInputElement> = () => {
    refs.forEach(({ current }) => {
      if (current?.value.length !== 4) {
        setValidStatus({
          isValid: false,
          message: '카드 번호 16자리를 모두 입력해주세요.',
        });
      }
    });
  };

  return (
    <InputWrapper>
      <FormLabel>카드 번호</FormLabel>
      <CardNumberInputContainer>
        <Input
          value={creditCard.cardNumber[0]}
          onChange={generateChangeHandler(0)}
          onBlur={_onBlur}
          maxLength={4}
          inputMode="numeric"
          ref={refs[0]}
        />

        <Input
          value={creditCard.cardNumber[1]}
          onChange={generateChangeHandler(1)}
          onBlur={_onBlur}
          maxLength={4}
          inputMode="numeric"
          ref={refs[1]}
        />

        <Input
          value={creditCard.cardNumber[2]}
          onChange={generateChangeHandler(2)}
          onBlur={_onBlur}
          maxLength={4}
          inputMode="numeric"
          type="password"
          text-align="center"
          placeholder="●●●●"
          ref={refs[2]}
        />

        <Input
          value={creditCard.cardNumber[3]}
          onChange={generateChangeHandler(3)}
          onBlur={_onBlurLast}
          maxLength={4}
          inputMode="numeric"
          type="password"
          placeholder="●●●●"
          text-align="center"
          ref={refs[3]}
        />
      </CardNumberInputContainer>
      {!validStatus.isValid && <ErrorSpan>{validStatus.message}</ErrorSpan>}
    </InputWrapper>
  );
};

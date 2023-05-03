import React, { useState, useContext, useRef } from 'react';

import useAutoFocus from '../../../hooks/useAutoFocus';
import FormLabel from '../../@common/FormLabel';
import Input from '../../@common/input/Input';
import ErrorSpan from '../../@common/ErrorSpan';
import InputWrapper from '../../@common/InputWrapper';
import CardNumberInputContainer from './CardNumber.style';
import CreditCardContextType from '../../../@types/creditCardContextType';
import { CreditCardContext } from '../../../contexts/CreditCardContext';

export const CardNumber = () => {
  const { creditCard, setCreditCard } = useContext(CreditCardContext) as CreditCardContextType;

  const [validStatus, setValidStatus] = useState({
    isValid: false,
    message: '',
  });

  const inputListRef = useRef<HTMLInputElement[]>([]);
  const { focusNext } = useAutoFocus(inputListRef, 4);

  const handleChangeByIndex: (index: number) => React.ChangeEventHandler<HTMLInputElement> =
    (index) => (event) => {
      const enteredNumber = event.currentTarget.value;

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

  const handleBlur: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const enteredNumber = event.currentTarget.value;
    if (enteredNumber.length !== 4) {
      return setValidStatus({
        isValid: false,
        message: '4글자를 모두 입력해주세요.',
      });
    }
  };

  const handleBlurLast: React.FocusEventHandler<HTMLInputElement> = () => {
    inputListRef.current.forEach((ref) => {
      if (ref?.value.length !== 4) {
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
        {Array.from({ length: 4 }, (_, index) => (
          <Input
            data-testid={`card-number-${index}`}
            key={`card-number-${index}`}
            value={creditCard.cardNumber[index]}
            onChange={handleChangeByIndex(index)}
            onBlur={index === 3 ? handleBlurLast : handleBlur}
            maxLength={4}
            inputMode="numeric"
            ref={(el: HTMLInputElement) => {
              inputListRef.current[index] = el;
            }}
          />
        ))}
      </CardNumberInputContainer>
      {!validStatus.isValid && <ErrorSpan>{validStatus.message}</ErrorSpan>}
    </InputWrapper>
  );
};

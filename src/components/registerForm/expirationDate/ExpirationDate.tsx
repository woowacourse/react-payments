import React, { useState, useContext, useRef } from 'react';

import FormLabel from '../../@common/FormLabel';
import Input from '../../@common/input/Input';
import ErrorSpan from '../../@common/ErrorSpan';
import { CreditCardContext } from '../../../contexts/CreditCardContext';
import { ONLY_NUMBER_REGEXP } from '../../../utils/regexp';
import InputWrapper from '../../@common/InputWrapper';
import CreditCardContextType from '../../../@types/creditCardContextType';
import useAutoFocus from '../../../hooks/useAutoFocus';

function ExpirationDate() {
  const { creditCard, setCreditCard } = useContext(CreditCardContext) as CreditCardContextType;

  const [validStatus, setValidStatus] = useState({
    isValid: true,
    message: '',
  });

  const inputListRef = useRef<HTMLInputElement[]>([]);
  const { focusNext } = useAutoFocus(inputListRef, 2);

  const handleChange: (index: number) => React.ChangeEventHandler<HTMLInputElement> =
    (index) => (event) => {
      const enteredDate = event.currentTarget.value;

      if (!ONLY_NUMBER_REGEXP.test(enteredDate)) {
        setValidStatus({
          isValid: false,
          message: '숫자만 입력 가능합니다.',
        });

        return;
      }

      setValidStatus({
        isValid: true,
        message: '',
      });

      const prevValue = [...creditCard.expirationDate];
      prevValue[index] = enteredDate;

      focusNext(index);
      setCreditCard('expirationDate', prevValue);
    };

  const handleBlur: React.ChangeEventHandler<HTMLInputElement> = () => {
    if ([...creditCard.cardNumber].every((elem) => elem.length === 2)) {
      return setValidStatus({
        isValid: false,
        message: '만료일을 모두 작성해주세요.',
      });
    }

    if (!/^(0[1-9]|1[1-2])$/.test(creditCard.expirationDate[0])) {
      setValidStatus({
        isValid: false,
        message: '월은 01 ~ 12로 입력해주세요.',
      });

      return;
    }

    if (!/^\d{2}$/.test(creditCard.expirationDate[1])) {
      setValidStatus({
        isValid: false,
        message: '연도는 두 자리 숫자로 입력해주세요.',
      });

      return;
    }

    setValidStatus({
      isValid: true,
      message: '',
    });
  };

  return (
    <InputWrapper>
      <FormLabel>{'만료일'}</FormLabel>
      <div style={{ display: 'flex', columnGap: '10px' }}>
        <Input
          data-testid="expiration-date-0"
          value={creditCard.expirationDate[0]}
          ref={(el: HTMLInputElement) => {
            inputListRef.current[0] = el;
          }}
          onChange={handleChange(0)}
          maxLength={2}
          inputMode="numeric"
          placeholder="MM"
          width="100px"
          text-align="center"
          font-weight="500"
          line-height="21px"
        />

        <Input
          data-testid="expiration-date-1"
          value={creditCard.expirationDate[1]}
          ref={(el: HTMLInputElement) => {
            inputListRef.current[1] = el;
          }}
          onChange={handleChange(1)}
          onBlur={handleBlur}
          maxLength={2}
          inputMode="numeric"
          placeholder="YY"
          width="100px"
          text-align="center"
          font-weight="500"
          line-height="21px"
        />
      </div>
      {!validStatus.isValid && <ErrorSpan>{validStatus.message}</ErrorSpan>}
    </InputWrapper>
  );
}

export default ExpirationDate;

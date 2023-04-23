import React, { useState, useContext, useRef } from 'react';

import styled, { css } from 'styled-components';

import useAutoFocus from '../../../hooks/useAutoFocus';
import FormLabel from '../../@common/FormLabel';
import Input from '../../@common/Input';
import ErrorSpan from '../../@common/ErrorSpan';
import { CreditCardContext } from '../../../contexts/CreditCardContext';

export const CardNumber = () => {
  const [creditCardInfo, setCreditCardInfo] = useContext(CreditCardContext);
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

  const _onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const enteredNumber = event.currentTarget.value as string;
    const inputIndex = Number(event.currentTarget.dataset['index']);

    if (isNaN(Number(enteredNumber))) {
      return setValidStatus({
        isValid: false,
        message: '숫자만 입력 가능합니다.',
      });
    }

    const newCardNumber = [...creditCardInfo.cardNumber];
    newCardNumber[inputIndex] = enteredNumber;

    if (!setCreditCardInfo) return;

    setCreditCardInfo('cardNumber', newCardNumber);
    setValidStatus({
      isValid: true,
      message: '',
    });
    focusNext(inputIndex);
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
    <div>
      <FormLabel>카드 번호</FormLabel>
      <CardNumberInputContainer>
        <Input
          data-order="first"
          data-index="0"
          value={creditCardInfo.cardNumber[0]}
          onChange={_onChange}
          onBlur={_onBlur}
          maxLength={4}
          customInputStyle={CardNumberInput}
          inputmode="numeric"
          ref={refs[0]}
        />
        <p>-</p>
        <Input
          data-order="second"
          data-index="1"
          value={creditCardInfo.cardNumber[1]}
          onChange={_onChange}
          onBlur={_onBlur}
          maxLength={4}
          customInputStyle={CardNumberInput}
          inputmode="numeric"
          ref={refs[1]}
        />
        <p>-</p>

        <Input
          data-order="third"
          data-index="2"
          value={creditCardInfo.cardNumber[2]}
          onChange={_onChange}
          onBlur={_onBlur}
          maxLength={4}
          customInputStyle={CardNumberInput}
          inputmode="numeric"
          type={'password'}
          placeholder="●●●●"
          ref={refs[2]}
        />
        <p>-</p>

        <Input
          data-order="fourth"
          data-index="3"
          value={creditCardInfo.cardNumber[3]}
          onChange={_onChange}
          onBlur={_onBlurLast}
          maxLength={4}
          customInputStyle={CardNumberInput}
          inputmode="numeric"
          type={'password'}
          placeholder="●●●●"
          ref={refs[3]}
        />
      </CardNumberInputContainer>
      {!validStatus.isValid && <ErrorSpan>{validStatus.message}</ErrorSpan>}
    </div>
  );
};

const CardNumberInputContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;

  width: 100%;
  height: 45px;

  border-radius: 7px;
  background-color: #ecebf1;
  padding: 0 10px;
`;

const CardNumberInput = css`
  width: 60px;
  letter-spacing: 3px;
  text-align: center;
  font-size: 18px;
`;

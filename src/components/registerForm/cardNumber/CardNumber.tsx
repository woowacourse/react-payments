import React, { forwardRef, useState, useContext, useRef } from 'react';

import styled, { css } from 'styled-components';

import useAutoFocus from '../../../hooks/useAutoFocus';
import FormLabel from '../../@common/FormLabel';
import Input from '../../@common/Input';
import ErrorSpan from '../../@common/ErrorSpan';
import { ONLY_NUMBER_REGEXP } from '../../../utils/regexp';
import CreditCardContext from '../../../contexts/InputValueContext';

interface Props {}

export const CardNumber = forwardRef<HTMLDivElement, Props>(({}, ref) => {
  const [creditCardInfo, setCreditCardInfo] = useContext(CreditCardContext);
  const [cardError, setCardError] = useState({
    isError: false,
    message: '',
  });

  // auto-focus
  const refs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const nextInputFocus = useAutoFocus({
    refs: refs,
    maxLength: 4,
  });

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const enteredNumber = event.currentTarget.value as string;
    const inputIndex = Number(event.currentTarget.dataset['index']);

    // type guard
    if (Number.isNaN(inputIndex)) return;

    // 숫자가 아니면 입력받지 않는다.
    if (!ONLY_NUMBER_REGEXP.test(enteredNumber)) return;

    try {
      // validation1. 4글자인지 확인하기
      // FIXME blur 되었을 때 (border처리 및 메세지 출력 및 focus 유지)
      if (enteredNumber.length !== 4) {
        throw new Error(`4글자를 입력해 주세요`);
      }

      // validation 통과하면 에러메세지 없애기
      setCardError({
        isError: false,
        message: '',
      });
    } catch (error) {
      if (error instanceof Error) {
        setCardError({
          isError: true,
          message: error.message,
        });
      }
    } finally {
      if (!setCreditCardInfo) return;

      console.log(refs[3].current?.value);
      const newValue = [...creditCardInfo.cardNumber];
      newValue[inputIndex] = enteredNumber;

      setCreditCardInfo('cardNumber', newValue);
    }
    nextInputFocus(Number(inputIndex));
  };

  return (
    <div>
      <FormLabel>카드 번호</FormLabel>
      <CardNumberInputContainer ref={ref}>
        <Input
          data-order="first"
          data-index="0"
          value={creditCardInfo.cardNumber[0]}
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
          maxLength={4}
          customInputStyle={CardNumberInput}
          inputmode="numeric"
          type={'password'}
          placeholder="●●●●"
          ref={refs[3]}
        />
      </CardNumberInputContainer>
      {cardError?.isError && <ErrorSpan>{cardError?.message}</ErrorSpan>}
    </div>
  );
});

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

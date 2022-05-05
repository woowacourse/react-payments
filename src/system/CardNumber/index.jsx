import React from 'react';

import useCardState from '../../hooks/useCardState';
import useCardDispatch from '../../hooks/useCardDispatch';

import MarginBottomWrapper from '../../components/MarginBottomWrapper';
import Label from '../../components/Label';
import FlexAlignCenter from '../../components/FlexAlignCenter';

import Hyphen from './Hyphen';
import CardNumberInput from './CardNumberInput';

import { SHOW_MODAL } from '../../pages/CardAddition/CardListModal/action';
import TYPING_CARD_NUMBER from './action';

import InputContainerStyled from './style';

const CardNumber = () => {
  const cardNumber = useCardState((state) => state.cardNumber);
  const cardCompanyName = useCardState((state) => state.cardCompanyName);
  const dispatch = useCardDispatch();

  const onChangeInput = (index) => (e) => {
    dispatch({ type: TYPING_CARD_NUMBER, value: e.target.value, index });
  };

  const onFocusInput = () => {
    cardCompanyName || dispatch({ type: SHOW_MODAL });
  };

  return (
    <div>
      <MarginBottomWrapper>
        <Label>카드 번호</Label>
      </MarginBottomWrapper>
      <FlexAlignCenter>
        <InputContainerStyled>
          <CardNumberInput
            type='text'
            value={cardNumber[0]}
            onChange={onChangeInput(0)}
            onFocus={onFocusInput}
          />
          <Hyphen />
          <CardNumberInput
            type='text'
            value={cardNumber[1]}
            onChange={onChangeInput(1)}
            onFocus={onFocusInput}
          />
          <Hyphen />
          <CardNumberInput
            type='password'
            value={cardNumber[2]}
            onChange={onChangeInput(2)}
            onFocus={onFocusInput}
          />
          <Hyphen />
          <CardNumberInput
            type='password'
            value={cardNumber[3]}
            onChange={onChangeInput(3)}
            onFocus={onFocusInput}
          />
        </InputContainerStyled>
      </FlexAlignCenter>
    </div>
  );
}

export default CardNumber;

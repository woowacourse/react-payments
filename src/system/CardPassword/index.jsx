import React, { forwardRef } from 'react';

import useCardState from '../../hooks/useCardState';
import useCardDispatch from '../../hooks/useCardDispatch';

import MarginBottomWrapper from '../../components/MarginBottomWrapper';
import Label from '../../components/Label';
import FlexCenter from '../../components/FlexCenter';
import Circle from '../../components/Circle';

import CardPasswordInput from './CardPasswordInput';
import PasswordContainerStyled from './style';

import TYPING_CARD_PASSWORD from './action';

import { isValidEachCardPassword } from '../../lib/validation';
import focusEmptyInput from '../../lib';

const CardPassword = (props, ref) => {
  const cardPassword = useCardState((state) => state.cardPassword);
  const cardCompanyColor = useCardState((state) => state.cardCompanyColor);
  const dispatch = useCardDispatch();

  const onChangeInput = (index) => (e) => {
    const value = e.target.value;

    dispatch({ type: TYPING_CARD_PASSWORD, value, index });
    isValidEachCardPassword(value) && focusEmptyInput(ref, index + 8);
  };

  return (
    <div>
      <MarginBottomWrapper>
        <Label>카드 비밀번호</Label>
      </MarginBottomWrapper>
      <PasswordContainerStyled>
        <CardPasswordInput
          value={cardPassword[0]}
          onChange={onChangeInput(0)}
          ref={ref[8]}
        />
        <CardPasswordInput
          value={cardPassword[1]}
          onChange={onChangeInput(1)}
          ref={ref[9]}
        />
        <FlexCenter>
          <Circle size='5px' color={cardCompanyColor} />
        </FlexCenter>
        <FlexCenter>
          <Circle size='5px' color={cardCompanyColor} />
        </FlexCenter>
      </PasswordContainerStyled>
    </div>
  );
};

export default forwardRef(CardPassword);

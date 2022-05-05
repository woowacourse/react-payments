import React from 'react';

import useCardState from '../../hooks/useCardState';
import useCardDispatch from '../../hooks/useCardDispatch';

import MarginBottomWrapper from '../../components/MarginBottomWrapper';
import Label from '../../components/Label';
import FlexCenter from '../../components/FlexCenter';
import Circle from '../../components/Circle';

import CardPasswordInput from './CardPasswordInput';
import PasswordContainerStyled from './style';

import TYPING_CARD_PASSWORD from './action';

const CardPassword = () => {
  const cardPassword = useCardState((state) => state.cardPassword);
  const cardCompanyColor = useCardState((state) => state.cardCompanyColor);
  const dispatch = useCardDispatch();

  const onChangeInput = (index) => (e) => {
    dispatch({ type: TYPING_CARD_PASSWORD, value: e.target.value, index });
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
        />
        <CardPasswordInput
          value={cardPassword[1]}
          onChange={onChangeInput(1)}
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
}

export default CardPassword;

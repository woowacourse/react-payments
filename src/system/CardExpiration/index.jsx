import React from 'react';

import useCardState from '../../hooks/useCardState';
import useCardDispatch from '../../hooks/useCardDispatch';

import MarginBottomWrapper from '../../components/MarginBottomWrapper';
import Label from '../../components/Label';
import FlexAlignCenter from '../../components/FlexAlignCenter';
import Flex from '../../components/Flex';

import CardExpirationInput from './CardExpirationInput';

import TYPING_CARD_EXPIRATION from './action';

const CardExpiration = () => {
  const cardExpiration = useCardState((state) => state.cardExpiration);
  const dispatch = useCardDispatch();

  const onChangeInput = (index) => (e) => {
    dispatch({ type: TYPING_CARD_EXPIRATION, value: e.target.value, index });
  };

  return (
    <div>
      <MarginBottomWrapper>
        <Label>만료일</Label>
      </MarginBottomWrapper>
      <FlexAlignCenter>
        <Flex width='40%'>
          <CardExpirationInput
            placeholder='MM'
            value={cardExpiration[0]}
            onChange={onChangeInput(0)}
          />
          <CardExpirationInput
            placeholder='YY'
            value={cardExpiration[1]}
            onChange={onChangeInput(1)}
          />
        </Flex>
      </FlexAlignCenter>
    </div>
  );
}

export default CardExpiration;

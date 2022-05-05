import React, { forwardRef, useEffect } from 'react';

import useCardState from '../../hooks/useCardState';
import useCardDispatch from '../../hooks/useCardDispatch';

import MarginBottomWrapper from '../../components/MarginBottomWrapper';
import Label from '../../components/Label';
import FlexAlignCenter from '../../components/FlexAlignCenter';
import Flex from '../../components/Flex';

import CardExpirationInput from './CardExpirationInput';

import { TYPING_CARD_EXPIRATION_MONTH, TYPING_CARD_EXPIRATION_YEAR } from './action';

import { isValidCardExpirationMonth, isValidCardExpiration } from '../../lib/validation';
import focusEmptyInput from '../../lib';

const CardExpiration = (props, ref) => {
  const cardExpiration = useCardState((state) => state.cardExpiration);
  const dispatch = useCardDispatch();

  const onChangeMonth = (e) => {
    const value = e.target.value;

    dispatch({ type: TYPING_CARD_EXPIRATION_MONTH, value });
    isValidCardExpirationMonth(value) && focusEmptyInput(ref, 4);
  };

  const onChangeYear = (e) => {
    const value = e.target.value;

    dispatch({ type: TYPING_CARD_EXPIRATION_YEAR, value });
  };

  useEffect(() => {
    isValidCardExpiration(cardExpiration) && focusEmptyInput(ref, 5);
  }, [cardExpiration]);

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
            onChange={onChangeMonth}
            ref={ref[4]}
          />
          <CardExpirationInput
            placeholder='YY'
            value={cardExpiration[1]}
            onChange={onChangeYear}
            ref={ref[5]}
          />
        </Flex>
      </FlexAlignCenter>
    </div>
  );
};

export default forwardRef(CardExpiration);

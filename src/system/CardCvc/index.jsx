import React, { forwardRef } from 'react';

import useCardState from '../../hooks/useCardState';
import useCardDispatch from '../../hooks/useCardDispatch';

import TipButton from '../../components/TipButton';
import MarginBottomWrapper from '../../components/MarginBottomWrapper';
import Label from '../../components/Label';
import FlexAlignCenter from '../../components/FlexAlignCenter';
import Flex from '../../components/Flex';

import CardCvcInput from './CardCvcInput';

import TYPING_CARD_CVC from './actions';

import { isValidCardCvc } from '../../lib/validation';
import focusEmptyInput from '../../lib';

const CardCvc = (props, ref) => {
  const cardCvc = useCardState((state) => state.cardCvc);
  const dispatch = useCardDispatch();

  const onChangeInput = (e) => {
    const value = e.target.value;

    dispatch({ type: TYPING_CARD_CVC, value });
    isValidCardCvc(value) && focusEmptyInput(ref, 7);
  };

  return (
    <div>
      <MarginBottomWrapper>
        <Label>보안코드(CVC/CVV)</Label>
      </MarginBottomWrapper>
      <FlexAlignCenter>
        <Flex width='23%'>
          <CardCvcInput
            value={cardCvc}
            onChange={onChangeInput}
            ref={ref[7]}
          />
        </Flex>
        <TipButton />
      </FlexAlignCenter>
    </div>
  );
};

export default forwardRef(CardCvc);

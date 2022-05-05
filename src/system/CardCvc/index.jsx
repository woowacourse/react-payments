import React from 'react';

import useCardState from '../../hooks/useCardState';
import useCardDispatch from '../../hooks/useCardDispatch';

import TipButton from '../../components/TipButton';
import MarginBottomWrapper from '../../components/MarginBottomWrapper';
import Label from '../../components/Label';
import FlexAlignCenter from '../../components/FlexAlignCenter';
import Flex from '../../components/Flex';

import CardCvcInput from './CardCvcInput';

import TYPING_CARD_CVC from './actions';

const CardCvc = () => {
  const cardCvc = useCardState((state) => state.cardCvc);
  const dispatch = useCardDispatch();

  const onChangeInput = (e) => {
    dispatch({ type: TYPING_CARD_CVC, value: e.target.value });
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
          />
        </Flex>
        <TipButton />
      </FlexAlignCenter>
    </div>
  );
};

export default CardCvc;

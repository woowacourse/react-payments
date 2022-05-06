import React, { forwardRef } from 'react';

import useCardState from '../../hooks/useCardState';
import useCardDispatch from '../../hooks/useCardDispatch';

import MarginBottomWrapper from '../../components/MarginBottomWrapper';
import Label from '../../components/Label';
import Flex from '../../components/Flex';
import FlexAlignCenter from '../../components/FlexAlignCenter';
import FlexSpaceBetween from '../../components/FlexSpaceBetween';

import NameLength from './NameLength';
import CardOwnerInput from './CardOwnerInput';

import TYPING_CARD_OWNER from './action';

const CardOwner = (props, ref) => {
  const cardOwner = useCardState((state) => state.cardOwner);
  const dispatch = useCardDispatch();

  const onChangeInput = (e) => {
    dispatch({ type: TYPING_CARD_OWNER, value: e.target.value });
  };

  return (
    <div>
      <MarginBottomWrapper>
        <FlexSpaceBetween>
          <Label>카드소유자 이름(선택)</Label>
          <NameLength>{cardOwner}</NameLength>
        </FlexSpaceBetween>
      </MarginBottomWrapper>
      <FlexAlignCenter>
        <Flex>
          <CardOwnerInput
            value={cardOwner}
            onChange={onChangeInput}
            ref={ref[6]}
          />
        </Flex>
      </FlexAlignCenter>
    </div>
  );
};

export default forwardRef(CardOwner);

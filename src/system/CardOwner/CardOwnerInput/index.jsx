import React, { forwardRef } from 'react';

import useCardState from '../../../hooks/useCardState';

import CardOwnerInputStyled from './style';

const CardOwnerInput = ({ value, onChange }, ref) => {
  const cardCompanyColor = useCardState((state) => state.cardCompanyColor);

  return (
    <CardOwnerInputStyled
      placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
      type='text'
      maxLength='30'
      color={cardCompanyColor}
      value={value}
      onChange={onChange}
      ref={ref}
    />
  );
};

export default forwardRef(CardOwnerInput);

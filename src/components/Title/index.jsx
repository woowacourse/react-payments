import React from 'react';

import { TitleWrapperStyled, TitleStyled } from './style';

const Title = ({ hasPrevButton, children }) => {
  return (
    <TitleWrapperStyled>
      {hasPrevButton && <span>{'<'}</span>}
      <TitleStyled>{children}</TitleStyled>
    </TitleWrapperStyled>
  );
}

export default Title;

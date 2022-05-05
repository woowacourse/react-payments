import React from 'react';

import PrevButton from './PrevButton';
import { PageTitleStyled, TitleStyled } from './style';

const PageTitle = ({ hasPrevButton, children }) => {
  return (
    <PageTitleStyled>
      <PrevButton hasPrevButton={hasPrevButton} />
      <TitleStyled>{children}</TitleStyled>
    </PageTitleStyled>
  );
};

export default PageTitle;

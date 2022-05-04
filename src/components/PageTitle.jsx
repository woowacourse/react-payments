import React from 'react';
import * as S from 'styles.js';

export default function PageTitle({ hasPrevButton, title }) {
  return (
    <S.PageTitleBox>
      {hasPrevButton && <span>{'<'}</span>}
      <S.PageTitle>{title}</S.PageTitle>
    </S.PageTitleBox>
  );
}

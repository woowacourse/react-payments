import React from 'react';
import * as S from 'styles.js';

export default function CardCompany({ color, children, onClick, selected }) {
  return (
    <S.CardCompanyStyled onClick={onClick}>
      <S.Circle size="37px" color={color} />
      <S.CardCompanyName selected={selected}>{children}</S.CardCompanyName>
    </S.CardCompanyStyled>
  );
}

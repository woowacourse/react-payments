import React from 'react';
import { BsDot } from 'react-icons/bs';
import { DOT_PRIMARY_COLOR } from '../../theme';
import * as S from './styles';

function InactiveContainer() {
  return (
    <S.DotContainer>
      <BsDot size={40} color={DOT_PRIMARY_COLOR} />
    </S.DotContainer>
  );
}

export default InactiveContainer;

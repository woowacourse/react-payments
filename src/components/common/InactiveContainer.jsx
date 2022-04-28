import React from 'react';
import { BsDot } from 'react-icons/bs';
import { DOT_PRIMARY_COLOR } from '../../style';
import { DotContainer } from './styled';

function InactiveContainer() {
  return (
    <DotContainer>
      <BsDot size={40} color={DOT_PRIMARY_COLOR} />
    </DotContainer>
  );
}

export default InactiveContainer;

import React from 'react';
import { BsDot } from 'react-icons/bs';
import { DotContainer } from './styled';

function InactiveContainer() {
  return (
    <DotContainer>
      <BsDot size={40} color="#04c09e" />
    </DotContainer>
  );
}

export default InactiveContainer;

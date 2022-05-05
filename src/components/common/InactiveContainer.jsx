import React from 'react';
import styled from 'styled-components';
import { BsDot } from 'react-icons/bs';
import { DOT_PRIMARY_COLOR } from '../../style';

const DotContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
`;

function InactiveContainer() {
  return (
    <DotContainer>
      <BsDot size={40} color={DOT_PRIMARY_COLOR} />
    </DotContainer>
  );
}

export default InactiveContainer;

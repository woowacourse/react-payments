import React from 'react';
import styled from 'styled-components';

const StyledHeaderContainer = styled.header`
  padding: 8px 0 22px;
`;

const StyledPageTitle = styled.h1`
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.085em;
  color: #383838;
`;

export default function Header({ titleText }) {
  return (
    <StyledHeaderContainer>
      <StyledPageTitle>{titleText}</StyledPageTitle>
    </StyledHeaderContainer>
  );
}

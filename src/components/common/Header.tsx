import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  children: React.ReactNode;
  leadingButton: JSX.Element;
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const Title = styled.span`
  padding: 0 8px;
  margin: 0;
  font-size: 1.5rem;
`;

function Header({ children, leadingButton }: HeaderProps) {
  return (
    <HeaderContainer>
      {leadingButton !== undefined && leadingButton}
      <Title>{children}</Title>
    </HeaderContainer>
  );
}

export default Header;

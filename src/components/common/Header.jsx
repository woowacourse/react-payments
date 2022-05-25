import React from "react";
import styled from "styled-components";

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

function Header({ children: title, leadingButton }) {
  return (
    <HeaderContainer>
      {leadingButton && leadingButton}
      <Title>{title}</Title>
    </HeaderContainer>
  );
}

export default Header;

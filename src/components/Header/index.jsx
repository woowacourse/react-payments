import React from "react";
import styled from "styled-components";

const Header = (props) => {
  return (
    <HeaderContainer>
      <BackButton>
        <Arrow />
      </BackButton>
      <Title>{props.title}</Title>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  padding: 10px;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 16px;
`;

const BackButton = styled.button`
  width: 44px;
  height: 44px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 5px;
  &::hover > div {
    border-left: 1px solid #04c09e;
    border-bottom: 1px solid #04c09e;
  }
  &::active > div {
    border-left: 1px solid #04c09e;
    border-bottom: 1px solid #04c09e;
  }
`;

const Arrow = styled.div`
  border-left: 1px solid #111;
  border-bottom: 1px solid #111;
  width: 12px;
  height: 12px;
  transform: rotate(45deg);
`;

export default Header;

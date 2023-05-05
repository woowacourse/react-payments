import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

type AppBarProps = {
  prevButton?: boolean;
};

const AppBar = ({ children, prevButton = false }: PropsWithChildren<AppBarProps>) => {
  return (
    <Header>
      {prevButton && (
        <Link to="..">
          <PrevButton type="button">〈</PrevButton>
        </Link>
      )}
      <Title>{children}</Title>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 30px;

  gap: 10px;

  font-size: 16px;
  font-weight: 700;
`;

const PrevButton = styled.button`
  background-color: transparent;
  border: none;

  cursor: pointer;
`;

const Title = styled.h1`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 700;
`;

export default AppBar;

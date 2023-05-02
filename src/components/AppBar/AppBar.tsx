import { useNavigate } from "react-router-dom";

import styled from "styled-components";

type AppBarProps = {
  title: string;
  prevButton?: boolean;
};

const AppBar = ({ title, prevButton = false }: AppBarProps) => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <Header>
      {prevButton && <PrevButton onClick={goBack}>〈</PrevButton>}
      <Title>{title}</Title>
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

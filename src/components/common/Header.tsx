import styled from "styled-components";

interface HeaderProps {
  title: string;
  render?: () => JSX.Element;
}

export function Header(props: HeaderProps) {
  const { title, render } = props;
  return (
    <HeaderUnit>
      {render && render()}
      <Title>{title}</Title>
    </HeaderUnit>
  );
}

const HeaderUnit = styled.header`
  position: relative;

  display: flex;
  justify-content: start;
  align-items: center;
  height: 5.6rem;

  font-size: 2rem;
  margin-bottom: 2rem;

  width: 100%;
`;

const Title = styled.h2`
  font-size: 1.6rem;

  margin-left: 5rem;
`;

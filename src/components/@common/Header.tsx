import styled from "styled-components";

interface HeaderProps {
  children: React.ReactNode;
}

export function Header(props: HeaderProps) {
  const { children } = props;

  return (
    <HeaderUnit>
      <Title>{children}</Title>
    </HeaderUnit>
  );
}

const HeaderUnit = styled.header`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 5.6rem;

  ${({ theme }) => theme.fonts.h1};
  margin-bottom: 2rem;

  width: 100%;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 11rem;
  ${({ theme }) => theme.fonts.h2};

  margin-left: 5rem;
`;

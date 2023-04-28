import styled from "styled-components";
import { PropsWithChildren } from "react";

interface HeaderProps {
  text: string;
}

export const Header = ({ text, children }: PropsWithChildren<HeaderProps>) => {
  return (
    <HeaderWrapper>
      {children}
      <Text>{text}</Text>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 65px;
  padding: 20px 36px;
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <Style.Wrapper>
      <Style.ChildrenContainer>{children}</Style.ChildrenContainer>
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #c8c8c8;
  `,
  ChildrenContainer: styled.div`
    width: max-content;
    height: max-content;

    padding: 25px;

    background-color: white;
  `,
};

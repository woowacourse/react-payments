import { PropsWithChildren } from "react";
import styled from "styled-components";

export const InputContainer = ({ children }: PropsWithChildren<{}>) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 65px;
`;

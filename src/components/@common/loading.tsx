import { PropsWithChildren } from "react";
import styled, { keyframes } from "styled-components";

export function Loading(props: PropsWithChildren) {
  const { children } = props;

  return (
    <LoadingWrapper>
      <DotWrapper>
        <Dot delay="0s" />
        <Dot delay="0.1s" />
        <Dot delay="0.2s" />
      </DotWrapper>
      {children}
    </LoadingWrapper>
  );
}
export const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }

  50% { 
    margin-bottom: 1rem;
  }

  100% { 
    margin-bottom: 0;
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
`;

const DotWrapper = styled.div`
  position: absolute;
  top: 40%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;
`;

const Dot = styled.div<{ delay: string }>`
  background-color: black;
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.25rem;
  /*Animation*/
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`;

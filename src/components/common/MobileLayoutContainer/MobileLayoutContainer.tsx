import { ReactNode } from 'react';
import styled from 'styled-components';

function MobileLayoutContainer({ children }: { children: ReactNode }) {
  return (
    <MobileLayout>
      <MobileContainer>{children}</MobileContainer>
    </MobileLayout>
  );
}

const MobileLayout = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 376px;
  min-height: 100vh;
  background-color: white;
  border: 1px solid lightgray;
`;

export default MobileLayoutContainer;

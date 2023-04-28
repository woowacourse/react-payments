import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { PaymentsProvider } from './context/PaymentsContext';

const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  min-height: 100px;
  height: 100vh;
`;

export const App = () => {
  return (
    <PaymentsProvider>
      <Container>
        <Outlet />
      </Container>
    </PaymentsProvider>
  );
};

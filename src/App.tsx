import { Outlet } from 'react-router';
import styled, { ThemeProvider } from 'styled-components';
import { PaymentsProvider } from './context/PaymentsContext';
import { ResetStyle } from './styles/ResetStyle';
import { theme } from './styles/theme';

const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  min-height: 100px;
  height: 100vh;
`;

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <PaymentsProvider>
        <Container>
          <ResetStyle />

          <Outlet />
        </Container>
      </PaymentsProvider>
    </ThemeProvider>
  );
};

import { useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { PaymentsProvider } from './context/PaymentsContext';
import { useMediaQuery } from './hooks/useMediaQuery';
import { router } from './router';
import { GlobalStyle } from './styles/GlobalStyle';
import { ResetStyle } from './styles/ResetStyle';
import { dark, light } from './styles/theme';

const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  min-height: 100px;
  height: 100vh;
`;

export const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(() => (prefersDarkMode ? dark : light), [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <ResetStyle />
      <GlobalStyle />

      <PaymentsProvider>
        <Container>
          <RouterProvider router={router} />
        </Container>
      </PaymentsProvider>
    </ThemeProvider>
  );
};

import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CompletePage from './pages/CompletePage';
import styled from '@emotion/styled';
import { NumbersProvider } from './contexts/NumbersContext';
import { ExpiryDateProvider } from './contexts/ExpiryDateContext';
import { BrandProvider } from './contexts/BrandContext';
import { CvcProvider } from './contexts/CvcContext';
import { PasswordProvider } from './contexts/PasswordContext';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NumbersProvider>
        <BrandProvider>
          <ExpiryDateProvider>
            <CvcProvider>
              <PasswordProvider>
                <Main>
                  <Router basename={import.meta.env.VITE_BASE_URL}>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/complete" element={<CompletePage />} />
                    </Routes>
                  </Router>
                </Main>
              </PasswordProvider>
            </CvcProvider>
          </ExpiryDateProvider>
        </BrandProvider>
      </NumbersProvider>
    </ThemeProvider>
  );
};
export default App;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 376px;
  height: 100dvh;
  background-color: ${({ theme }) => theme.colors.background};
  gap: 24px;
  overflow: auto;
`;

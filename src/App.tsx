import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { CardFormProvider } from './contexts/CardFormContext';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CompletePage from './pages/CompletePage';
import styled from '@emotion/styled';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CardFormProvider>
        <Main>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/complete" element={<CompletePage />} />
            </Routes>
          </Router>
        </Main>
      </CardFormProvider>
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

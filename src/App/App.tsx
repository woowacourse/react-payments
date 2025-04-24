import CompletePage from '@/pages/CompletePage/CompletePage';
import RegisterPage from '@/pages/RegisterPage/RegisterPage';
import { Global, ThemeProvider } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import global from '../styles/global';
import { theme } from '../styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/complete" element={<CompletePage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

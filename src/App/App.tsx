import { CompletePage, RegisterPage } from '@/pages';
import { Global, ThemeProvider } from '@emotion/react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import global from '../styles/global';
import { theme } from '../styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <HashRouter>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/complete" element={<CompletePage />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;

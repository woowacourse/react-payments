import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import theme from './styles/theme.ts';
import GlobalStyle from './styles/GlobalStyle.ts';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration/Registration.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/react-payments" element={<App />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);

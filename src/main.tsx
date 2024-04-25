import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { StrictMode } from 'react';
import GlobalStyles from './styles/GlobalStyles.tsx';
import { GlobalLayout } from './styles/common.ts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardRegisterCompletedPage from './pages/CardRegisterCompletedPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <GlobalLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/register" element={<CardRegisterCompletedPage />} />
        </Routes>
      </BrowserRouter>
    </GlobalLayout>
  </StrictMode>,
);

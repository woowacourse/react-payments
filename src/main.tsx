import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles.tsx';
import { GlobalLayout } from './styles/common.ts';
import CardRegisterCompletedPage from './pages/CardRegisterCompletedPage.tsx';
import CardRegisterPage from './pages/CardRegisterPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <GlobalLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardRegisterPage />} />
          <Route path="/register" element={<CardRegisterCompletedPage />} />
        </Routes>
      </BrowserRouter>
    </GlobalLayout>
  </StrictMode>,
);

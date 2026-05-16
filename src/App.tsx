import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CardRegisterPage from './feature/CardRegister/CardRegisterPage';
import './styles/reset.css';
import CardRegisterCompletePage from './feature/CardRegisterComplete/CardRegisterCompletePage';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import CardListPage from './feature/CardList/CardListPage';

const enableMocking = async () => {
  if (!import.meta.env.DEV) return;

  const { worker } = await import('./mocks/browser');

  return worker.start();
};

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/cards" replace />} />
          <Route path="/cards" element={<CardListPage />} />
          <Route path="/register" element={<CardRegisterPage />} />
          <Route path="/complete" element={<CardRegisterCompletePage />} />
        </Routes>
      </HashRouter>
    </StrictMode>,
  );
});

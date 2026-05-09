import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CardRegisterPage from './feature/CardRegister/CardRegisterPage';
import './styles/reset.css';
import CardRegisterCompletePage from './feature/CardRegisterComplete/CardRegisterCompletePage';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/register" replace />} />
        <Route path="/register" element={<CardRegisterPage />} />
        <Route path="/complete" element={<CardRegisterCompletePage />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);

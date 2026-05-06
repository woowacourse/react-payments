import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import AddCardPage from './Pages/AddCardPage';
import AddCardResultPage from './Pages/AddCardResultPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<AddCardPage />} />
        <Route path="/add-card-result" element={<AddCardResultPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

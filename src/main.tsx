import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import AddCardPage from './pages/AddCardPage';
import ResultPage from './pages/ResultPage';
import CardsPage from './pages/CardsPage';

async function enableMocking() {
  const { setupWorker } = await import('msw/browser');
  const { handlers } = await import('./mocks/handlers');

  return setupWorker(...handlers).start({
    onUnhandledRequest: 'bypass',
    serviceWorker: {
      url: `${import.meta.env.BASE_URL}mockServiceWorker.js`,
    },
  });
}

await enableMocking();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<AddCardPage />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

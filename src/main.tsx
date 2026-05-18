import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router';
import AddCardPage from './pages/AddCardPage';
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

const isSubPath = import.meta.env.BASE_URL !== '/';

const routes = (
  <Routes>
    <Route path="/" element={<AddCardPage />} />
    <Route path="/cards" element={<CardsPage />} />
  </Routes>
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isSubPath ? (
      <HashRouter>{routes}</HashRouter>
    ) : (
      <BrowserRouter basename={import.meta.env.BASE_URL}>{routes}</BrowserRouter>
    )}
  </StrictMode>,
);

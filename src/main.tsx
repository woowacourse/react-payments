import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './reset.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';

async function enableMocking() {
  const { worker } = await import('./mocks/browser');
  return worker.start({
    serviceWorker: {
      url: `${import.meta.env.BASE_URL}mockServiceWorker.js`,
    },
    onUnhandledRequest: 'bypass',
  });
}

await enableMocking();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>
);

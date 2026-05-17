import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { worker } from './mocks/browser.ts';

if (import.meta.env.NODE_ENV !== 'production') {
  await worker.start({
    serviceWorker: {
      url: '/react-payments/mockServiceWorker.js',
    },
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

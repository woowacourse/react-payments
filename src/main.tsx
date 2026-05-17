import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

const getBaseUrl = () => {
  return import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
};

const enableMocking = async () => {
  if (!import.meta.env.DEV && import.meta.env.VITE_ENABLE_MSW !== 'true') return;

  const { worker } = await import('./mocks/browser');
  const baseUrl = getBaseUrl();

  return worker.start({
    serviceWorker: {
      url: `${baseUrl}mockServiceWorker.js`,
      options: {
        scope: baseUrl,
      },
    },
    onUnhandledRequest: 'bypass',
  });
};

await enableMocking();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

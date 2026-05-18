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
  const workerUrl = `${baseUrl}mockServiceWorker.js`;

  try {
    await worker.start({
      serviceWorker: {
        url: workerUrl,
        options: {
          scope: baseUrl,
        },
      },
      onUnhandledRequest: 'bypass',
    });
    console.log('[MSW] Service worker registered at base URL:', workerUrl);
  } catch (error) {
    console.error('[MSW] Failed to start worker:', error);
  }
};

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});

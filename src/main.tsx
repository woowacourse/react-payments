import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { worker } from '@/mocks/msw/browser';

import { AppProviders } from './providers/AppProviders.tsx';

import { ENV } from './configs/env.ts';

import App from './App.tsx';

await worker.start({
  serviceWorker: {
    url: `${ENV.BASE_URL}mockServiceWorker.js`,
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
);

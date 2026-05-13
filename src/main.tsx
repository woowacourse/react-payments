import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { worker } from '@/mocks/msw/browser';

import { AppProviders } from './providers/AppProviders.tsx';

import App from './App.tsx';

await worker.start();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppProviders } from './providers/AppProviders.tsx';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
);

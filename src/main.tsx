import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './reset.css';
import router from './routes/routes.tsx';

async function enableMocking() {
  if (import.meta.env.MODE !== 'development') return;
  const { worker } = await import('../src/mocks/browser.ts');
  return worker.start({
    serviceWorker: {
      url: `${import.meta.env.BASE_URL}mockServiceWorker.js`,
    },
  });
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
});

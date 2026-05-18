import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AddCardCompletePage from './pages/AddCardCompletePage';
import AddCardPage from './pages/AddCardPage';
import MobileLayout from './components/ui/MobileLayout';

if (import.meta.env.DEV) {
  const { worker } = await import('./msw/browser');
  await worker.start({ onUnhandledRequest: 'bypass' });
}

const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: MobileLayout,
      children: [
        { index: true, Component: AddCardPage },
        { path: 'complete', Component: AddCardCompletePage },
      ],
    },
  ],
  { basename: '/react-payments' },
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

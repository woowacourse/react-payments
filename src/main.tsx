import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AddCardCompletePage from './pages/AddCardCompletePage';
import AddCardPage from './pages/AddCardPage';
import CardListPage from './pages/CardListPage';
import MobileLayout from './components/ui/MobileLayout';
import { BASE_PATH, ROUTES } from './routes';

if (import.meta.env.DEV) {
  const { worker } = await import('./msw/browser');
  await worker.start({ onUnhandledRequest: 'bypass', serviceWorker: { url: `${BASE_PATH}/mockServiceWorker.js` } });
}

const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: MobileLayout,
      children: [
        { index: true, Component: CardListPage },
        { path: ROUTES.addCard, Component: AddCardPage },
        { path: ROUTES.addCardComplete, Component: AddCardCompletePage },
      ],
    },
  ],
  { basename: BASE_PATH },
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

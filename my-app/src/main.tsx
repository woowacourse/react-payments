import { createRoot } from 'react-dom/client';
import './styles/reset.css';
import App from './App.tsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router';
import AddCardPage from './pages/AddCardPage/AddCardPage.tsx';
import SuccessPage from './pages/SuccessPage/SuccessPage.tsx';
import CardListPage from './pages/CardListPage/CardListPage.tsx';

const BASENAME = '/react-payments/';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<CardListPage />} />
      <Route path="add" element={<AddCardPage />} />
      <Route path="success" element={<SuccessPage />} />
    </Route>,
  ),
  {
    basename: BASENAME,
  },
);

const root = document.getElementById('root');

// 서비스 워커 등록 (등록 이후에 실행되야 하므로 비동기 처리)
async function enableMocking() {
  const { worker } = await import('./mocks/browser');

  return worker.start({
    serviceWorker: {
      url: `${BASENAME}mockServiceWorker.js`,
    },
  });
}

enableMocking().then(() => {
  createRoot(root!).render(<RouterProvider router={router} />);
});

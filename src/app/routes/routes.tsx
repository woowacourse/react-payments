import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router';
import Layout from '../layout/Layout';
import CardPage from '../../pages/CardPage/CardPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import { ROUTES } from '../../shared/constants/routeConstants';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTES.ROOT} element={<Layout />}>
      <Route path={ROUTES.CARD} element={<CardPage />} />,
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

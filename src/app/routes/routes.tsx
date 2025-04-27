import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router';
import CardPage from '../../pages/CardPage/CardPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import { ROUTES } from '../../shared/constants/routes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTES.CARD} element={<CardPage />} />,
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
    </>
  )
);

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router';
import CardPage from '../../pages/CardPage/CardPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<CardPage />} />,
      <Route path='/register' element={<RegisterPage />} />
    </>
  )
);

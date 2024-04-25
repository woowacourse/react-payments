import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CardRegisterCompletePage, CardRegisterPage, NotFoundPage } from '@pages/index';

import { ROUTE_ENDPOINT_MAP } from '@routes/constant';

const BASE_URL = process.env.NODE_ENV === 'production' ? '/react-payments/' : '/';

const Router = () => {
  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route path={ROUTE_ENDPOINT_MAP.root} element={<CardRegisterPage />} />
        <Route path={ROUTE_ENDPOINT_MAP.cardRegisterComplete} element={<CardRegisterCompletePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

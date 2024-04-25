import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CardRegisterCompletePage, CardRegisterPage } from '@pages/index';

import { ROUTE_ENDPOINT_MAP } from '@routes/constant';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_ENDPOINT_MAP.root} element={<CardRegisterPage />} />
        <Route path={ROUTE_ENDPOINT_MAP.cardRegisterComplete} element={<CardRegisterCompletePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

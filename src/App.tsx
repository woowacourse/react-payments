import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/@common/Layout/Layout';
import { ToastProvider } from './context/ToastMessageContext';
import MyCardListRoute from './routes/MyCardListRoute';
import CardRegisterRoute from './routes/CardRegisterRoute';
import CardRegisterProvider from './context/CardRegisterContext';
import { BottomSheetProvider } from 'react-bottom-sheet-booungi';
import RegisterLoadingPage from './pages/RegisterLoading/RegisterLoadingPage';
import routes from './constants/Routes';

function App() {
  return (
    <BottomSheetProvider>
      <ToastProvider>
        <CardRegisterProvider>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index path={routes.home} element={<MyCardListRoute />} />
                <Route path={routes.registerCard} element={<CardRegisterRoute />} />
                <Route path={routes.registerLoading} element={<RegisterLoadingPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CardRegisterProvider>
      </ToastProvider>
    </BottomSheetProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardRegisterProvider from './context/CardRegisterContext';

import Layout from './components/@common/Layout/Layout';
import { BottomSheetProvider } from './context/BottomSheetContext';
import { ToastProvider } from './context/ToastMessageContext';
import MyCardListRoute from './routes/MyCardListRoute';
import CardRegisterRoute from './routes/CardRegisterRoute';

function App() {
  return (
    <ToastProvider>
      <BottomSheetProvider>
        <CardRegisterProvider>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index path='/' element={<MyCardListRoute />} />
                <Route path='/registerCard/*' element={<CardRegisterRoute />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CardRegisterProvider>
      </BottomSheetProvider>
    </ToastProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardRegister from './pages/CardRegister/CardRegister';
import MyCardList from './pages/MyCardList/MyCardList';
import CardRegisterProvider from './context/CardRegisterContext';

import Layout from './components/@common/Layout/Layout';
import { BottomSheetProvider } from './context/BottomSheetContext';
import CardAlias from './pages/CardRegister/CardAlias/CardAlias';
import { ToastProvider } from './context/ToastMessageContext';

function App() {
  return (
    <ToastProvider>
      <BottomSheetProvider>
        <CardRegisterProvider>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index path='/' element={<MyCardList />} />
                <Route
                  path='/registerCard/*'
                  element={
                    <Routes>
                      <Route path='/' element={<CardRegister />} />
                      <Route path=':alias' element={<CardAlias />} />
                    </Routes>
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </CardRegisterProvider>
      </BottomSheetProvider>
    </ToastProvider>
  );
}

export default App;

import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { Register } from './pages/register';
import { AddCardNickName } from './pages/register/AddCardNickName';
import { CardInfoProvider } from './components/cardInfoProvider';
import { ModalProvider } from './components/modalProvider/ModalProvider';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <CardInfoProvider>
        <ModalProvider>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register/nickname" element={<AddCardNickName />} />
          </Routes>
        </ModalProvider>
      </CardInfoProvider>
    </BrowserRouter>
  );
}

export default App;

import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { Register } from './pages/register';
import { AddCardNickName } from './pages/register/AddCardNickName';
import { CardInfoProvider } from './components/cardInfoProvider';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <CardInfoProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/nickname" element={<AddCardNickName />} />
        </Routes>
      </CardInfoProvider>
    </BrowserRouter>
  );
}

export default App;

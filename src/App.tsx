import React from 'react';
import styled from '@emotion/styled';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation/Navigation';
import { PaymentProvider } from './PaymentContext';
import CardList from './pages/card-list/CardList';
import { CardRegisterProvider } from './pages/card-register/context';
import CardRegister from './pages/card-register/CardRegister';
import CardRegisterConfirm from './pages/card-register-confirm/CardRegisterConfirm';

function App() {
  return (
    <Page>
      <BrowserRouter>
        <PaymentProvider>
          <Navigation />
          <CardRegisterProvider>
            <Routes>
              <Route path="/" element={<CardList />} />
              <Route path="/card-register" element={<CardRegister />} />
              <Route path="/card-register-confirm" element={<CardRegisterConfirm />} />
            </Routes>
          </CardRegisterProvider>
        </PaymentProvider>
      </BrowserRouter>
    </Page>
  );
}

const Page = styled.div`
  width: 375px;
  margin: 0 auto;
  padding: 22px 28px 16px 28px;
  position: relative;
  background-color: white;
`;

export default App;

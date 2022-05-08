import React from 'react';
import styled from '@emotion/styled';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './shared/components/navigation/Navigation';
import CardRegister from './card-register/register-page/CardRegister';
import CardRegisterConfirm from './card-register/confirm-page/CardRegisterConfirm';
import { PaymentProvider } from './context';
import CardList from './card-list/CardList';
import { CardRegisterProvider } from './card-register/context';

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

import React from 'react';
import styled from '@emotion/styled';
import Navigation from './card-register/components/navigation/Navigation';
import CardRegister from './card-register/CardRegister';
import { PaymentProvider } from './context';
import CardList from './card-list/CardList';

function App() {
  return (
    <Page>
      <PaymentProvider>
        <Navigation />
        <CardList />
      </PaymentProvider>
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

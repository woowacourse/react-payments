import React from 'react';
import CardContainer from 'containers/card/CardContainer';
import CardFormContainer from 'containers/card/CardFormContainer';
import AppProvider from 'context/Provider';
import Navigation from 'fields/Navigation';
import AddCardPage from 'pages/AddCardPage';

function App() {
  return (
    <AppProvider>
      <AddCardPage>
        <Navigation />
        <CardContainer />
        <CardFormContainer />
      </AddCardPage>
    </AppProvider>
  );
}

export default App;

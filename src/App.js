import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CardAdditionComplete from './components/CardAdditionComplete';
import AddCard from './components/AddCard';
import AppWrapper from './App.styles.js';
import GlobalStyles from './global.styles';
import CardList from './components/CardList';
import { CardContextProvider } from './context/CardContext';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <CardContextProvider>
        <AppWrapper>
          <Switch>
            <Route exact path='/' component={AddCard} />
            <Route path='/completed' component={CardAdditionComplete} />
            <Route path='/lists' component={CardList} />
          </Switch>
        </AppWrapper>
      </CardContextProvider>
    </BrowserRouter>
  );
}

export default App;

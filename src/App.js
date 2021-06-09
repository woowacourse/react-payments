import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CardAdditionComplete from './components/CardAdditionComplete';
import AddCard from './components/AddCard';
import AppWrapper from './App.styles.js';
import GlobalStyles from './global.styles';
import CardList from './components/CardList';
import useAddCardForm from './hooks/useAddCardForm';

function App() {
  const {
    cardInfo,
    setCardInfo,
    addNewCard,
    handleCardColor,
  } = useAddCardForm();

  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppWrapper>
        <Switch>
          <Route exact path='/'>
            <AddCard
              newCardInfo={cardInfo}
              setCardInfo={setCardInfo}
              handleCardColor={handleCardColor}
            />
          </Route>
          <Route
            path='/completed'
            render={() => (
              <CardAdditionComplete
                newCardInfo={cardInfo}
                setNewCardInfo={setCardInfo}
                addNewCard={addNewCard}
              />
            )}
          />

          <Route path='/lists' component={CardList} />
        </Switch>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;

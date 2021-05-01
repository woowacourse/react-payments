import { useState } from 'react';
import CardCreationPage from './pages/cardCreationPage';
import CardListPage from './pages/cardListPage';
import CardCreationCompletePage from './pages/cardCreationCompletePage';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { CardValidator } from './validations/card';

const App = () => {
  const [newCardInfo, setNewCardInfo] = useState({
    cardNumber: {},
    cardExpiredDate: {},
    cardOwner: '',
    selectedCardInfo: {},
    cardNickName: '',
  });

  const isValidAccess = CardValidator.Number(newCardInfo.cardNumber);

  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <CardListPage />} />
      <Route exact path="/create" render={() => <CardCreationPage setNewCardInfo={setNewCardInfo} />} />
      <Route
        exact
        path="/complete"
        render={() =>
          isValidAccess ? (
            <CardCreationCompletePage newCardInfo={newCardInfo} setNewCardInfo={setNewCardInfo} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    </BrowserRouter>
  );
};

export default App;

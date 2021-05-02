import { useState } from 'react';
import CardCreationPage from './pages/cardCreationPage';
import CardListPage from './pages/cardListPage';
import CardCreationCompletePage from './pages/cardCreationCompletePage';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { CardValidator } from './validations/card';
import { INPUT } from './constants';

const App = () => {
  const [newCardInfo, setNewCardInfo] = useState({
    cardNumber: { [INPUT.FIRST]: '', [INPUT.SECOND]: '', [INPUT.THIRD]: '', [INPUT.FOURTH]: '' },
    cardExpiredDate: { [INPUT.MONTH]: '', [INPUT.YEAR]: '' },
    cardOwner: '',
    selectedCardInfo: { id: null, name: '', color: '' },
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

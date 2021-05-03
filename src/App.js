import { useState } from 'react';
import CardCreationPage from './pages/cardCreationPage';
import CardListPage from './pages/cardListPage';
import CardCreationCompletePage from './pages/cardCreationCompletePage';
import CardNicknameChangePage from './pages/cardNicknameChangePage';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { CardValidator } from './validations/card';
import { INPUT } from './constants';

const App = () => {
  const [newCardInfo, setNewCardInfo] = useState({
    cardNumber: { [INPUT.FIRST]: '', [INPUT.SECOND]: '', [INPUT.THIRD]: '', [INPUT.FOURTH]: '' },
    cardExpiredDate: { [INPUT.MONTH]: '', [INPUT.YEAR]: '' },
    cardOwner: '',
    selectedCardInfo: { id: null, name: '', color: '' },
    cardNickname: '',
  });

  const isValidAccess = CardValidator.Number(newCardInfo.cardNumber);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <CardListPage />} />
        <Route path="/create" render={() => <CardCreationPage setNewCardInfo={setNewCardInfo} />} />
        <Route
          path="/complete"
          render={() =>
            isValidAccess ? (
              <CardCreationCompletePage newCardInfo={newCardInfo} setNewCardInfo={setNewCardInfo} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route path="/change" render={() => <CardNicknameChangePage setNewCardInfo={setNewCardInfo} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

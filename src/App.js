import "./app.scss";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import CardListPage from "./pages/CardListPage/CardListPage";
import AddCardPage from "./pages/AddCardPage/AddCardPage";
import AddCardCompletePage from "./pages/AddCardCompletePage/AddCardCompletePage";
import { STATE_KEY } from "./constants";

function App() {
  const [appState, setAppState] = useState({
    [STATE_KEY.CARD_COMPANY]: "",
    [STATE_KEY.CARD_NUMBER]: {
      [STATE_KEY.FIRST_CARD_NUMBER]: "",
      [STATE_KEY.SECOND_CARD_NUMBER]: "",
      [STATE_KEY.THIRD_CARD_NUMBER]: "",
      [STATE_KEY.FOURTH_CARD_NUMBER]: "",
    },
    [STATE_KEY.CARD_EXPIRATION]: "",
    [STATE_KEY.CARD_OWNER]: "",
    [STATE_KEY.CARD_NICK_NAME]: "",
    [STATE_KEY.CARD_CVC]: "",
    [STATE_KEY.CARD_PASSWORD]: [],
  });

  // 앱 상태 업데이트 가드용
  const setCardState = (appStateKey, appStateValue) => {
    if (!(appStateKey in appState)) {
      return;
    }

    setAppState((state) => ({
      ...state,
      [appStateKey]: appStateValue,
    }));
  };

  return (
    <div className="App">
      <Switch>
        <Route path="/add" exact>
          <AddCardPage
            cardCompany={appState.cardCompany}
            cardNumber={appState.cardNumber}
            cardOwner={appState.cardOwner}
            cardExpiration={appState.cardExpiration}
            cardCVC={appState.cardCVC}
            cardPassword={appState.cardPassword}
            setCardState={setCardState}
          />
        </Route>
        <Route path="/complete" exact>
          <AddCardCompletePage
            cardCompany={appState.cardCompany}
            cardNickName={appState.cardNickName}
          />
        </Route>
        <Route>
          <CardListPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

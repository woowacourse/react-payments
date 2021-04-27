import "./app.scss";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import CardListPage from "./pages/CardListPage/CardListPage";
import AddCardPage from "./pages/AddCardPage/AddCardPage";
import AddCardCompletePage from "./pages/AddCardCompletePage/AddCardCompletePage";

// TODO : Card Input diable 시키기
function App() {
  const [appState, setAppState] = useState({
    cardCompany: "",
    cardNumber: {
      firstCardNumber: "",
      secondCardNumber: "",
      thirdCardNumber: "",
      fourthCardNumber: "",
    },
    cardOwner: "",
    cardExpiration: "",
    cardNickName: "",
    cardCVC: "",
    cardPassword: [],
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

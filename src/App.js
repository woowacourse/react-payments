import "./app.scss";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import CardListPage from "./pages/CardListPage/CardListPage";
import AddCardPage from "./pages/AddCardPage/AddCardPage";
import AddCardCompletePage from "./pages/AddCardCompletePage/AddCardCompletePage";
import { STATE_KEY } from "./constants";
import { AppContext, InputValidationContext } from "./contexts/appContext";

const initialCardState = {
  [STATE_KEY.CARD_COMPANY]: "",
  [STATE_KEY.CARD_NUMBER]: {
    [STATE_KEY.FIRST_CARD_NUMBER]: "",
    [STATE_KEY.SECOND_CARD_NUMBER]: "",
    [STATE_KEY.THIRD_CARD_NUMBER]: "",
    [STATE_KEY.FOURTH_CARD_NUMBER]: "",
  },
  [STATE_KEY.CARD_EXPIRATION]: {
    [STATE_KEY.EXPIRATION_MONTH]: "",
    [STATE_KEY.EXPIRATION_YEAR]: "",
  },
  [STATE_KEY.CARD_OWNER]: "",
  [STATE_KEY.CARD_NICK_NAME]: "",
  [STATE_KEY.CARD_CVC]: "",
  [STATE_KEY.CARD_PASSWORD]: [null, null],
};

const initialCardInputValidationState = {
  [STATE_KEY.CARD_COMPANY]: "",
  [STATE_KEY.CARD_NUMBER]: "",
  [STATE_KEY.CARD_EXPIRATION]: "",
  [STATE_KEY.CARD_OWNER]: "",
  [STATE_KEY.CARD_CVC]: "",
  [STATE_KEY.CARD_PASSWORD]: "",
};

function App() {
  const [cardState, setCardState] = useState(initialCardState);
  const [cardListState, setCardListState] = useState([]);
  const [validationMessage, setValidationMessage] = useState(initialCardInputValidationState);

  const setCardStateByKey = (cardStateKey, cardStateValue) => {
    if (!(cardStateKey in cardState)) {
      return;
    }

    setCardState((state) => ({
      ...state,
      [cardStateKey]: cardStateValue,
    }));
  };

  const setCardStateEmpty = () => {
    setCardState({ ...initialCardState });
  };

  return (
    <div className="App">
      <AppContext.Provider value={{ cardState, cardListState, setCardStateByKey, setCardStateEmpty, setCardListState }}>
        <Switch>
          <Route path="/add" exact>
            <InputValidationContext.Provider value={{ validationMessage, setValidationMessage }}>
              <AddCardPage />
            </InputValidationContext.Provider>
          </Route>
          <Route path="/complete" exact>
            <AddCardCompletePage />
          </Route>
          <Route>
            <CardListPage />
          </Route>
        </Switch>
      </AppContext.Provider>
    </div>
  );
}

export default App;

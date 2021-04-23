import "./app.scss";
import { Route, Switch } from "react-router-dom";

import CardListPage from "./pages/CardListPage/CardListPage";
import AddCardPage from "./pages/AddCardPage/AddCardPage";
import AddCardCompletePage from "./pages/AddCardCompletePage/AddCardCompletePage";

function App() {
  return (
    <div className="App">
      {/* ContextAPI 적용하기 */}
      <Switch>
        <Route path="/add" exact component={AddCardPage} />
        <Route path="/complete" exact component={AddCardCompletePage} />
        <Route component={CardListPage} />
      </Switch>
    </div>
  );
}

export default App;

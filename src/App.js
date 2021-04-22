import "./app.css";
import { Route, Switch } from "react-router-dom";
import CardListPage from "./pages/CardListPage/CardListPage";

function App() {
  return (
    <div className="App">
      {/* ContextAPI 적용하기 */}
      <Switch>
        <Route path="/add" exact component={() => <div>카드 추가</div>} />
        <Route path="/complete" exact component={() => <div>카드 추가 완료</div>} />
        <Route component={CardListPage} />
      </Switch>
    </div>
  );
}

export default App;

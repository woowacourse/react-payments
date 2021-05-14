import CardCreationPage from './pages/cardCreationPage';
import CardListPage from './pages/cardListPage';
import CardCreationCompletePage from './pages/cardCreationCompletePage';
import CardNicknameChangePage from './pages/cardNicknameChangePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CardListPage} />
        <Route path="/create" component={CardCreationPage} />
        <Route path="/complete" component={CardCreationCompletePage} />
        <Route path="/change" component={CardNicknameChangePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

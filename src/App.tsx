import { HashRouter, Route, Switch } from 'react-router-dom';
import AddCardPage from './components/AddCardPage';
import CardListPage from './components/CardListPage';
import PAGE from './constants/pages';
import GlobalStyle from './global.styles';

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <div className="App">
        <Switch>
          <Route path={PAGE.CARD_LIST.PATH} component={CardListPage} exact />
          <Route path={PAGE.ADD_CARD.PATH} component={AddCardPage} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;

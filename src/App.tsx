import GlobalStyle from './global.styles';
import { CardsStateProvider } from './context/CardsStateContext';
import AddCardPage from './pages/AddCardPage';
import CardListPage from './pages/CardListPage';
import { Route, Switch } from 'react-router';
import EditNicknamePage from './pages/EditNicknamePage';

function App() {
  return (
    <>
      <GlobalStyle />

      <div className="App">
        <Switch>
          <CardsStateProvider>
            <Route path="/" exact component={CardListPage} />
            <Route path="/register" component={AddCardPage} />
            <Route path="/edit/:id" component={EditNicknamePage} />
          </CardsStateProvider>
        </Switch>
      </div>
    </>
  );
}

export default App;

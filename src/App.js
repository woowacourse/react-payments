import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ListPage } from './pages/ListPage';
import { AddPages } from './pages/AddPages';
import { ROUTE } from './constants';
import { CardListContextProvider } from './contexts';

export default function App() {
  return (
    <CardListContextProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path={[ROUTE.HOME, ROUTE.LIST]}>
              <ListPage />
            </Route>
            <Route path={ROUTE.ADD}>
              <AddPages />
            </Route>
          </Switch>
        </Router>
      </div>
    </CardListContextProvider>
  );
}

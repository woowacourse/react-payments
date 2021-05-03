import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from './GlobalStyle';
import theme from './theme';
import CardList from './pages/CardList/CardList';
import CardAddForm from './pages/CardAddForm/CardAddForm';
import CardAddComplete from './pages/CardAddComplete/CardAddComplete';
import ROUTE from './constants/route';
import { CardListProvider } from './contexts/CardList';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <CardListProvider>
      <Router>
        <Switch>
          <Route exact path={ROUTE.HOME} component={CardList} />
          <Route exact path={ROUTE.ADD} component={CardAddForm} />
          <Route exact path={ROUTE.COMPLETE} component={CardAddComplete} />
        </Switch>
      </Router>
    </CardListProvider>
  </ThemeProvider>
);

export default App;

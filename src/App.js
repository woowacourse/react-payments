import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from './GlobalStyle';
import theme from './theme';
import CardList from './pages/CardList/CardList';
import CardAddForm from './pages/CardAddForm/CardAddForm';
import CardAddComplete from './pages/CardAddComplete/CardAddComplete';
import ROUTE from './constants/route';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <Router>
      <Switch>
        <Route exact path={ROUTE.HOME} component={CardList} />
        <Route exact path={ROUTE.ADD} component={CardAddForm} />
        <Route exact path={[ROUTE.COMPLETE, ROUTE.EDIT]} component={CardAddComplete} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;

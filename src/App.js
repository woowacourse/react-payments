import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from './GlobalStyle';
import theme from './theme';
import CardList from './pages/CardList/CardList';
import CardAddForm from './pages/CardAddForm/CardAddForm';
import CardAddComplete from './pages/CardAddComplete/CardAddComplete';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <Router>
      <Switch>
        <Route exact path="/" component={CardList} />
        <Route exact path="/add" component={CardAddForm} />
        <Route exact path="/complete" component={CardAddComplete} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;

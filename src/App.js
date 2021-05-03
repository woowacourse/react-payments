import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ListPage } from './pages/ListPage';
import { AddPages } from './pages/AddPages';
import { ROUTE } from './constants';

export default function App() {
  const [cardList, setCardList] = useState([]);
  const addCardInfoToList = (cardInfo) => setCardList((prevList) => [...prevList, cardInfo]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={[ROUTE.HOME, ROUTE.LIST]}>
            <ListPage cardList={cardList} />
          </Route>
          <Route exact path={ROUTE.ADD}>
            <AddPages addCardInfoToList={addCardInfoToList} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

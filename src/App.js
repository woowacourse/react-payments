import { useState } from 'react';
import { ListPage } from './pages/ListPage';
import { AddCardPage } from './pages/AddPages';
import { ROUTE } from './constants';

export default function App() {
  const [route, setRoute] = useState(ROUTE.LIST);
  const [cardList, setCardList] = useState([]);
  const addCardInfoToList = (cardInfo) => setCardList((prevList) => [...prevList, cardInfo]);

  return (
    <div className="App">
      {route === ROUTE.LIST ? (
        <ListPage cardList={cardList} setRoute={setRoute} />
      ) : (
        <AddCardPage addCardInfoToList={addCardInfoToList} route={route} setRoute={setRoute} />
      )}
    </div>
  );
}

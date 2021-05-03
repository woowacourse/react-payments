import { useState } from 'react';
import { CardListPage } from './pages/CardListPage';
import { AddCardPage } from './pages/AddCardPages';
import { ROUTE } from './constants';

export default function App() {
  const [route, setRoute] = useState(ROUTE.LIST);
  const [cardList, setCardList] = useState([]);
  const addCardInfoToList = (cardInfo) => setCardList((prevList) => [...prevList, cardInfo]);

  return (
    <div className="App">
      {route === ROUTE.LIST ? (
        <CardListPage cardList={cardList} setRoute={setRoute} />
      ) : (
        <AddCardPage addCardInfoToList={addCardInfoToList} route={route} setRoute={setRoute} />
      )}
    </div>
  );
}

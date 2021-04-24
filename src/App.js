import { useState } from 'react';
import { CardListPage } from './pages/CardListPage';
import { AddCardPage } from './pages/AddCardPages';
import { PAGE } from './constants';

function App() {
  const [route, setRoute] = useState(PAGE.CARD_LIST);

  return (
    <div className="App">
      {route === PAGE.CARD_LIST ? (
        <CardListPage setRoute={setRoute} />
      ) : (
        <AddCardPage route={route} setRoute={setRoute} />
      )}
    </div>
  );
}

export default App;

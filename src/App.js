import { useState } from 'react';
import { CardListPage } from './pages/CardListPage';
import { AddCardPage } from './pages/AddCardPages';
import { PAGE } from './constants';

function App() {
  const [route, setRoute] = useState(PAGE.CARD_LIST);
  const [nickname, setNickname] = useState('');

  return (
    <div className="App">
      {route === PAGE.CARD_LIST ? (
        <CardListPage setRoute={setRoute} nickname={nickname} />
      ) : (
        <AddCardPage
          route={route}
          setRoute={setRoute}
          nickname={nickname}
          setNickname={setNickname}
        />
      )}
    </div>
  );
}

export default App;

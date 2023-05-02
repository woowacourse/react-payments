import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { PATH } from './constants/path';
import { AddCard, CardList, AddCardName } from './pages';
import { GlobalStyle } from './styles/global-style';

function App() {
  return (
    <>
      <GlobalStyle />
      <div id='App'>
        <Router>
          <Routes>
            <Route path={PATH.CARD_LIST} element={<CardList />}></Route>
            <Route path={PATH.ADD_CARD} element={<AddCard />}></Route>
            <Route path={PATH.ADD_CARD_NAME} element={<AddCardName />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

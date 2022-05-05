import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { PATH } from 'constants';

import { CardAdd, CardAddComplete, CardList } from 'pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={PATH.CARD_LIST} element={<CardList />} />
        <Route path={PATH.CARD_ADD} element={<CardAdd />} />
        <Route path={PATH.CARD_ADD_COMPLETE} element={<CardAddComplete />} />
      </Routes>
    </Router>
  );
}

export default App;

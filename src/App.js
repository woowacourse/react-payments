import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CardAdd, CardAddComplete, CardList } from 'pages';
import { PATH } from 'constants';

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

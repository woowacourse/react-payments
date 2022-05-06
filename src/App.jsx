import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardAddition from 'pages/CardAddition';
import CardList from 'pages/CardList';
import CardContext from 'store/card/CardContext';

function App() {
  return (
    <CardContext>
      <Router>
        <Routes>
          <Route path="/add-card" element={<CardAddition />} />
          <Route path="/card-list" element={<CardList />} />
        </Routes>
      </Router>
    </CardContext>
  );
}

export default App;

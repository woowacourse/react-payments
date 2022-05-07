import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCard from 'pages/AddCard';
import CardList from 'pages/CardList';
import CardContext from 'store/card/CardContext';
import Main from 'pages/Main';

function App() {
  return (
    <CardContext>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/add-card/" element={<AddCard />} />
          <Route path="/card-list/" element={<CardList />} />
        </Routes>
      </Router>
    </CardContext>
  );
}

export default App;

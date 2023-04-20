import { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/Home';
import AddCard from './pages/AddCard';
import { CardType } from './types/Card';

function App() {
  const [cards, setCards] = useState<CardType[]>([]);

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home cards={cards} />}></Route>
        <Route
          path="/add-card"
          element={<AddCard cards={cards} setCards={setCards} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;

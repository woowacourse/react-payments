import { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/Home';
import AddCard from './pages/AddCard';

interface Card {
  cardNumbers: Record<number, string>;
  expiredDate: Record<number, string>;
  cardOwnerName: string;
}

function App() {
  const [cards, setCards] = useState<Card[]>([]);

  console.log(cards);

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

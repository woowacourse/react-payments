import { useEffect, useState, createContext } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/Home';
import AddCard from './pages/AddCard';
import CardType from './types/Card';
import { getLoacalStorage, setLocalStorage } from './utils/setLocalStorge';
import AddCardAlias from './pages/AddCardAlias';

const initCards = () => {
  const localStorageCards = getLoacalStorage('cards');
  if (localStorageCards) return localStorageCards;
  return [];
};

export const Context = createContext<CardType[] | null>(null);

function App() {
  const [cards, setCards] = useState<CardType[] | []>(initCards());

  useEffect(() => {
    setLocalStorage('cards', cards);
  }, [cards]);

  return (
    <Context.Provider value={cards}>
      <Router basename={process.env.PUBLIC_URL}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home cards={cards} />} />
          <Route
            path="/add-card"
            element={<AddCard cards={cards} setCards={setCards} />}
          />
          <Route
            path="/add-card-alias"
            element={<AddCardAlias cards={cards} setCards={setCards} />}
          />
        </Routes>
      </Router>
    </Context.Provider>
  );
}

export default App;

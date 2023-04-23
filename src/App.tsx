import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/Home';
import AddCard from './pages/AddCard';
import { useCards } from './hooks';

function App() {
  const { cards, handleSetCards } = useCards();
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home cards={cards} />}></Route>
        <Route
          path="/add-card"
          element={<AddCard handleSetCards={handleSetCards} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;

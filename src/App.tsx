import { Routes, Route, useNavigate } from 'react-router-dom';
import AddCard from 'pages/AddCard/AddCard';
import CardList from 'pages/CardList/CardList';
import CardContext from 'store/card/CardContext';
import Main from 'pages/Main';

function App() {
  const navigate = useNavigate();

  return (
    <CardContext>
      <Routes>
        <Route path="/" element={<Main navigate={navigate} />} />
        <Route path="/add-card/" element={<AddCard navigate={navigate} />} />
        <Route path="/card-list/" element={<CardList navigate={navigate} />} />
      </Routes>
    </CardContext>
  );
}

export default App;

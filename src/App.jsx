import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import AddCard from './components/addCard/AddCard';
import CardList from './components/cardList/CardList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/react-payments" element={<CardList />} />
        <Route path="/react-payments/add" element={<AddCard />} />
      </Routes>
    </div>
  );
}

export default App;

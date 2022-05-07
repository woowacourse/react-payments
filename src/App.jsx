import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import AddCard from './components/addCard/AddCard';
import CardList from './components/cardList/CardList';
import CardsStore from './store/cards';

function App() {
  return (
    <div className="App">
      <CardsStore>
        <Routes>
          <Route exact path="/react-payments" element={<CardList />} />
          <Route path="/react-payments/add" element={<AddCard />} />
        </Routes>
      </CardsStore>
    </div>
  );
}

export default App;

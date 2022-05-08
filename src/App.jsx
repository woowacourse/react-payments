import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import AddCard from './components/addCard/AddCard';
import CardList from './components/cardList/CardList';
import CardsStore from './CardsStore';
import Register from './components/register/Register';

function App() {
  return (
    <div className="App">
      <CardsStore>
        <Routes>
          <Route exact path="/react-payments" element={<CardList />} />
          <Route path="/react-payments/add" element={<AddCard />} />
          <Route path="/react-payments/register" element={<Register />} />
        </Routes>
      </CardsStore>
    </div>
  );
}

export default App;

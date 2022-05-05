import { Route, Routes } from 'react-router-dom';
import CardListPage from './pages/CardListPage';
import AddCardPage from './pages/AddCardPage';
import AddCardResultPage from './pages/AddCardResultPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/react-payments/" element={<CardListPage />} />
        <Route path="/react-payments/addCard" element={<AddCardPage />} />
        <Route path="/react-payments/addCardResult" element={<AddCardResultPage />} />
      </Routes>
    </div>
  );
}

export default App;

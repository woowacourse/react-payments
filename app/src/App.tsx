import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CardList } from './page/CardList.tsx';
import { Card } from './page/Card.tsx';
import { RegistrationComplete } from './page/RegistrationComplete.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-payments" element={<CardList />} />
        <Route path="/react-payments/add" element={<Card />} />
        <Route path="/react-payments/complete" element={<RegistrationComplete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCard from './pages/payments/AddCard';
import AddCardComplete from './pages/payments/AddCardComplete';

function App() {
  return (
    <BrowserRouter basename="/react-payments">
      <Routes>
        <Route path="/" element={<AddCard />} />
        <Route path="/addCard" element={<AddCard />} />
        <Route path="/addCard/complete/" element={<AddCardComplete />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

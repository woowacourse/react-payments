import AddCard from './pages/AddCard/AddCard';
import AddCardComplete from './pages/AddCardComplete/AddCardComplete';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <Routes>
      <Route index element={<AddCard />} />
      <Route path="complete" element={<AddCardComplete />} />
    </Routes>
  );
}

export default App;

import AddCard from './pages/AddCard/AddCard';
import AddCardComplete from './pages/AddCardComplete/AddCardComplete';
import { Route, Routes } from 'react-router';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/complete" element={<AddCardComplete />} />
      <Route path="/" element={<AddCard />} />
      <Route path={'*'} element={<NotFound />} />
    </Routes>
  );
}

export default App;

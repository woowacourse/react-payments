import { Route, Routes } from 'react-router';
import { PAGE_URL } from './constants/pageUrl';
import AddCard from './pages/AddCard';

function App() {
  return (
    <Routes>
      <Route path={PAGE_URL.ADD_CARD} element={<AddCard />} />
    </Routes>
  );
}

export default App;

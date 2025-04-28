import { Route, Routes } from 'react-router';
import { PAGE_URL } from './constants/pageUrl';
import AddCard from './pages/AddCard';
import AddCardSuccess from './pages/AddCardSuccess';

function App() {
  return (
    <Routes>
      <Route path={PAGE_URL.ADD_CARD} element={<AddCard />} />
      <Route path={PAGE_URL.ADD_CARD_SUCCESS} element={<AddCardSuccess />} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from 'react-router';
import { PAGE_URL } from './constants/pageUrl';
import AddCard from './pages/AddCard';
import AddCardSuccess from './pages/AddCardSuccess';
import Notfound from './pages/Notfound';

function App() {
  return (
    <Routes>
      <Route path={PAGE_URL.ADD_CARD} element={<AddCard />} />
      <Route path={PAGE_URL.ADD_CARD_SUCCESS} element={<AddCardSuccess />} />
      <Route path={PAGE_URL.NOT_FOUND} element={<Notfound />} />
    </Routes>
  );
}

export default App;

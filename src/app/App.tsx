import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardRegistration from '../features/cardRegistration/ui/CardRegistration';
import CardComplete from '../features/cardComplete/ui/CardComplete';
import { ROUTES } from './routes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.CARD_REGISTRATION} element={<CardRegistration />} />
        <Route path={ROUTES.CARD_COMPLETE} element={<CardComplete />} />
      </Routes>
    </Router>
  );
}

export default App;

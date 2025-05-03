import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardRegistration from '../pages/cardRegistration/CardRegistration';
import CardComplete from '../pages/cardComplete/CardComplete';
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

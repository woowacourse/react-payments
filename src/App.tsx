import { Route, Routes } from 'react-router';
import Complete from './pages/complete/Complete';
import Payments from './pages/payments/Payments';
import { ROUTE_PATH } from './constants/route';

function App() {
  return (
    <Routes>
      <Route path={ROUTE_PATH.home} element={<Payments />} />
      <Route path={ROUTE_PATH.complete} element={<Complete />} />
    </Routes>
  );
}

export default App;

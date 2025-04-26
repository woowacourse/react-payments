import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaymentInputPage from './components/paymentInputPage/PaymentInputPage';
import { ROUTER } from './global/constants';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTER.main} element={<PaymentInputPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

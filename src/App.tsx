import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaymentInputPage from './components/paymentInputPage/PaymentInputPage';
import { ROUTER } from './global/constants';
import RegisterComplete from './components/registerCompletePage.tsx/RegisterComplete';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTER.main} element={<PaymentInputPage />} />
          <Route
            path={ROUTER.registerComplete}
            element={<RegisterComplete />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

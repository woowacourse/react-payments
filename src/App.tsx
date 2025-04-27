import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaymentInputPage from './components/paymentInputPage/PaymentInputPage';
import { ROUTER } from './global/constants';
import RegisterComplete from './components/registerCompletePage.tsx/RegisterComplete';
import { CardProvider } from './contexts/CardContext';
function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <CardProvider>
          <Routes>
            <Route path={ROUTER.main} element={<PaymentInputPage />} />
            <Route
              path={ROUTER.registerComplete}
              element={<RegisterComplete />}
            />
          </Routes>
        </CardProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

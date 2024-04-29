import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routePath } from "./constants/routePath";
import PaymentsSuccess from "./pages/PaymentSuccess";
import Payments from "./pages/Payments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePath.home} element={<Payments />} />
        <Route
          path={routePath.success}
          element={<PaymentsSuccess cardNumber="5511" cardName="BC카드" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

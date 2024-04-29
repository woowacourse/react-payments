import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewCardPage from "./pages/newCardPage/NewCardPage";
import ConfirmCardRegistration from "./pages/confirmCardRegistration/confirmCardRegistration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/react-payments"
          element={<NewCardPage />}
        />
        <Route
          path="/react-payments/confirmCardRegistration"
          element={<ConfirmCardRegistration />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

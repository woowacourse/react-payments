import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardRegistrationPage from "./components/CardRegistrationPage";
import CardRegistrationCompletePage from "./components/CardRegistrationCompletePage";
import { CARD_PATH } from "./constants/card";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={CARD_PATH.REGISTRATION_PAGE} element={<CardRegistrationPage />} />
          <Route
            path={CARD_PATH.CARD_REGISTRATION_COMPLETE_PAGE}
            element={<CardRegistrationCompletePage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

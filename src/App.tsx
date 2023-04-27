import MainPage from "pages/MainPage";
import CardRegisterForm from "pages/RegisterPage/CardRegisterForm";
import LastPage from "pages/LastPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { INITIAL_CARD_INFO } from "constants/initialCardInfo";
import { createContext } from "react";
import { CardInfoState } from "types";
import GotLost from "pages/GotLost";

const App = () => {
  const [cardInfo, setCardInfo] = useState(INITIAL_CARD_INFO);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/register"
          element={
            <>
              <CardInfoContext.Provider
                value={{ cardInfo: cardInfo, setCardInfo: setCardInfo }}
              >
                <CardRegisterForm allCardInfo={cardInfo} />
              </CardInfoContext.Provider>
            </>
          }
        />
        <Route path="/completion" element={<LastPage cardInfo={cardInfo} />} />
        <Route path="/got-lost" element={<GotLost />} />
        <Route path="*" element={<Navigate replace to="/got-lost" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

export const CardInfoContext = createContext<CardInfoState>({
  cardInfo: INITIAL_CARD_INFO,
  setCardInfo: () => {},
});

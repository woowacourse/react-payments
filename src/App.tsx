import "./App.css";
import "./style/reset.css";
import "./style/palette.css";

import { useState } from "react";

import CardInputPage from "./component/CardInputPage/CardInputPage";
import CardListPage from "./component/CardListPage/CardListPage";
import { CreditCard } from "./type/CreditCard";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import InputSuccessPage from "./component/InputSuccessPage/InputSuccessPage";
import RegisterPendingPage from "./component/RegisterPendingPage/RegisterPendingPage";
import { CreditCardProvider } from "./context/CreditCardContext";

function App() {
  const [cardList, setCardList] = useState<CreditCard[]>([]);

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <CreditCardProvider>
          <Routes>
            <Route path="/" element={<CardListPage cardList={cardList} />} />
              <Route
                path="/register"
                element={<CardInputPage/>}
              />
              <Route path="/register/pending" element={<RegisterPendingPage/>}/>
              <Route
                path="/register/success"
                element={<InputSuccessPage/>}
              />
            
            <Route path="*" element={<CardListPage cardList={cardList} />}/>
          </Routes>
        </CreditCardProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

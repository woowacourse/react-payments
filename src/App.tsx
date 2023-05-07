import "./App.css";
import "./style/reset.css";
import "./style/palette.css";

import CardInputPage from "./component/CardInputPage/CardInputPage";
import CardListPage from "./component/CardListPage/CardListPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import InputSuccessPage from "./component/InputSuccessPage/InputSuccessPage";
import RegisterPendingPage from "./component/RegisterPendingPage/RegisterPendingPage";
import { CreditCardProvider } from "./context/CreditCardContext";
import { CardListProvider } from "./context/CardListContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <CardListProvider>
          <CreditCardProvider>
            <Routes>
              <Route path="/" element={<CardListPage/>}/>
              <Route path="/register" element={<CardInputPage/>}/>
              <Route path="/register/pending" element={<RegisterPendingPage/>}/>
              <Route path="/register/success" element={<InputSuccessPage/>}/>
              <Route path="*" element={<CardListPage/>}/>
            </Routes>
          </CreditCardProvider>
        </CardListProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

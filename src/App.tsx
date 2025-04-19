import { Route, Routes } from "react-router";
import { PAGE_URL } from "./constants/pageUrl";
import AddCardPage from "./pages/addCard/AddCardPage";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <Routes>
      <Route path={PAGE_URL.HOME} element={<HomePage />} />
      <Route path={PAGE_URL.ADD_CARD} element={<AddCardPage />} />
      <Route
        path={PAGE_URL.ADD_CARD_SUCCESS}
        element={<div>카드 추가 성공</div>}
      />
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router";
import { PAGE_URL } from "./constants/pageUrl";
import AddCardPage from "./pages/add-card/AddCardPage";
import HomePage from "./pages/home/HomePage";
import AddCardSuccessPage from "./pages/add-card/success/AddCardSuccessPage";

function App() {
  return (
    <Routes>
      <Route path={PAGE_URL.HOME} element={<HomePage />} />
      <Route path={PAGE_URL.ADD_CARD} element={<AddCardPage />} />
      <Route
        path={PAGE_URL.ADD_CARD_SUCCESS}
        element={<AddCardSuccessPage />}
      />
    </Routes>
  );
}

export default App;

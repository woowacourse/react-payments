import AddCard from "./AddCard/components/AddCard";
import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import AddCardCompleteModal from "./AddCard/components/AddCardCompleteModal/AddCardCompleteModal";
import { locations } from "./AddCard/constants/locations";

function App() {
  return (
    <BrowserRouter basename={locations.BASE_URL}>
      <Routes>
        <Route index element={<AddCard />} />

        <Route
          path={locations.ADD_CARD_COMPLETE.pathname}
          element={<AddCardCompleteModal />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

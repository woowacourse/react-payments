import AddCard from "./AddCard/components/AddCard";
import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import AddCardCompleteModal from "./AddCard/components/AddCardCompleteModal/AddCardCompleteModal";
import { locations } from "./AddCard/constants/locations";
import Fallback from "./components/Fallback/Fallback";

function App() {
  return (
    <BrowserRouter basename={locations.BASE_URL}>
      <Routes>
        <Route index element={<AddCard />} />
        <Route
          path={locations.ADD_CARD_COMPLETE.pathname}
          element={<AddCardCompleteModal />}
        />
        <Route
          path="*"
          element={
            <Fallback
              message="잘못된 접근입니다."
              buttonText="홈으로 돌아가기"
              onButtonClick={() => <Navigate to="/" />}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

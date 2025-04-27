import AddCard from "./AddCard/components/AddCard";
import { Route, Routes, useNavigate } from "react-router-dom";
import AddCardCompleteModal from "./AddCard/components/AddCardCompleteModal/AddCardCompleteModal";
import { locations } from "./AddCard/constants/locations";
import Fallback from "./components/Fallback/Fallback";

function App() {
  const navigate = useNavigate();

  const handleFallbackButtonClick = () => {
    navigate("/");
  };

  return (
    <Routes>
      <Route index element={<AddCard />} />
      <Route
        path={locations.ADD_CARD_COMPLETE}
        element={<AddCardCompleteModal />}
      />
      <Route
        path="*"
        element={
          <Fallback
            message="잘못된 접근입니다."
            buttonText="홈으로 돌아가기"
            onButtonClick={handleFallbackButtonClick}
          />
        }
      />
    </Routes>
  );
}

export default App;

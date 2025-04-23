import AddCard from "./AddCard/components/AddCard";
import { Route, Routes } from "react-router";
import AddCardConfirmModal from "./AddCard/components/AddCardConfirmModal/AddCardConfirmModal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AddCard />} />
      <Route path="/AddCardConfirm" element={<AddCardConfirmModal />} />
    </Routes>
  );
}

export default App;

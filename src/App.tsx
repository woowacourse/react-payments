import AddCard from "./AddCard/components/AddCard";
import { Route, Routes } from "react-router-dom";
import AddCardCompleteModal from "./AddCard/components/AddCardCompleteModal/AddCardCompleteModal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AddCard />} />
      <Route path="/AddCardComplete" element={<AddCardCompleteModal />} />
    </Routes>
  );
}
export default App;

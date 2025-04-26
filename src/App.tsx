import AddCard from "./AddCard/components/AddCard";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import AddCardCompleteModal from "./AddCard/components/AddCardCompleteModal/AddCardCompleteModal";

function App() {
  return (
    <BrowserRouter basename="/react-payments">
      <Routes>
        <Route index element={<AddCard />} />
        <Route path="AddCardComplete" element={<AddCardCompleteModal />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

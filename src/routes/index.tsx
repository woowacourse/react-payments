import { BrowserRouter, Route, Routes } from "react-router";
import AddCard from "./pages/AddCard";
import CompleteCard from "./pages/CompleteCard";

const Router = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<AddCard />} />
        <Route path="/complete" element={<CompleteCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

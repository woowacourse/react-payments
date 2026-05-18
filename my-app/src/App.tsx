import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CardForm from "./pages/CardForm";
import CardComplete from "./pages/CardComplete";

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<CardForm />} />
          <Route path="/complete" element={<CardComplete />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


export default App;

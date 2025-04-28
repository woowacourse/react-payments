import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CardRegistrationCompletePage from "./pages/CardRegistrationCompletePage";

const Router = () => (
  <Routes>
    <Route path="/*" element={<HomePage/>}/>
    <Route path="/complete" element={<CardRegistrationCompletePage/>}/>
  </Routes>
)

export default Router;

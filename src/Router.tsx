import HomePage from "./pages/HomePage";
import CardRegistrationCompletePage from "./pages/CardRegistrationCompletePage";
import {Route, Routes} from "react-router-dom";
import {PATHS} from "./constants/routes";

const Router = () => (
  <Routes>
    <Route path={PATHS.HOME} element={<HomePage/>}/>
    <Route path={PATHS.COMPLETE} element={<CardRegistrationCompletePage/>}/>
  </Routes>
)

export default Router;

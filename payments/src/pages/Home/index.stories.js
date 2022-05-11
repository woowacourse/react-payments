import Home from ".";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Home",
  component: Home,
};

export const HomePage = () => (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);

import CardAdd from ".";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "CardAdd",
  component: CardAdd,
};

export const cardAdd = () => (
  <BrowserRouter>
    <CardAdd />
  </BrowserRouter>
);

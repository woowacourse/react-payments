import GlobalStyle from "../../styles/GlobalStyle";
import AddCardButton from "./AddCardButton";

export default {
  title: "AddCardButton",
  component: AddCardButton,
};

export const CardListPage = () => (
  <>
    <GlobalStyle />
    <AddCardButton></AddCardButton>
  </>
);

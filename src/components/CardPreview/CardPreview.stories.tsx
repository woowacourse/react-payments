import GlobalStyle from "../../styled/GlobalStyle";
import CardPreview from "./CardPreview";

export default {
  title: "CardPreview",
  component: CardPreview,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <CardPreview></CardPreview>
  </>
);

import GlobalStyle from "../../styled/GlobalStyle";
import CardOwnerNameInput from "./CardOwnerNameInput";

export default {
  title: "CardOwnerNameInput",
  component: CardOwnerNameInput,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <CardOwnerNameInput onChange={() => {}}></CardOwnerNameInput>
  </>
);

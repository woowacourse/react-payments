import GlobalStyle from "../../styled/GlobalStyle";
import CardPasswordInput from "./CardPasswordInput";

export default {
  title: "CardPasswordInput",
  component: CardPasswordInput,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <CardPasswordInput password={{ first: "", second: "" }} onChange={() => {}}></CardPasswordInput>
  </>
);

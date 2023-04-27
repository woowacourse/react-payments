import GlobalStyle from "../../styles/GlobalStyle";
import CardPasswordInput from "./CardPasswordInput";

export default {
  title: "CardPasswordInput",
  component: CardPasswordInput,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <CardPasswordInput password={{ first: "", second: "" }} setPassword={() => {}}></CardPasswordInput>
  </>
);

import GlobalStyle from "../../styles/GlobalStyle";
import { emptyArrowFuction, passwordInitialValue } from "../../util/initialValue";
import CardPasswordInput from "./CardPasswordInput";

export default {
  title: "CardPasswordInput",
  component: CardPasswordInput,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <CardPasswordInput password={passwordInitialValue} setPassword={emptyArrowFuction}></CardPasswordInput>
  </>
);
